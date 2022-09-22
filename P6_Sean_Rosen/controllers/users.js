const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
  Sequelize,
  DataTypes
} = require('sequelize');

const sequelize = new Sequelize('project7', 'postgres', 'postgrespass', {
  host: 'localhost',
  dialect: 'postgres'
});

let {
  User
} = require('../models/user');


// saves email and password to data base, checks if email is unique, hashes the password
exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {

      (async function () {
        await sequelize.sync({});
        const jane = User.build({
          passWord: hash,
          email: req.body.email
        });
        await jane.save();
      })().then(
        () => {
          res.status(201).json({
            message: 'user saved to database!'
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    })
};





// checks if user exists, and if the passwords match, returns a token
exports.checkUser = (req, res, next) => {
  (async function () {
    let user = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    return user;
  })().then((user) => {
    bcrypt.compare(req.body.password, user.passWord).then(
      (valid) => {
        if (!valid) {
          return res.status(401).json({
            error: new Error('Incorrect password!')
          });
        }
        const token = jwt.sign({
            userId: "12345"
          },
          'RANDOM_TOKEN_SECRET', {
            expiresIn: '24h'
          });
        res.status(200).json({
          userId: "12345",
          token: token
        });
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    )
  })
}