const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {
  Sequelize,
  DataTypes
} = require('sequelize');



const sequelize = new Sequelize('project7', 'postgres',   process.env.postGresPass,{
  host: 'localhost',
  dialect: 'postgres'
});

let {
  User
} = require('../models/user');

// saves email and password to data base, checks if email is unique, hashes the password
exports.createUser = (req, res, next) => {
  if (!req.body.fName || !req.body.lName || !req.body.userEmail || !req.body.password) {
    return res.status(401).json({
      error: new Error('needs user info')
    });
  }
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {

      (async function () {
        await sequelize.sync({});
        const newUser = User.build({
          passWord: hash,
          email: req.body.userEmail,
          firstName: req.body.fName,
          lastName: req.body.lName
        });
        await newUser.save();
      })().then(
        () => {
          res.status(201).json({
            message: 'user saved to database!'
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: 'email most be unique'
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
        email: req.body.userEmail
      }
    });
    return user;
  })().then((user) => {

    if (!user) {
      return res.status(401).json({
        error: 'email not found!'
        
      });
    }
    bcrypt.compare(req.body.password, user.passWord).then(
      (valid) => {
        if (!valid) {
          return res.status(401).json({
            error: 'Incorrect password!'
          });
        }
        const token = jwt.sign({
            userId: user.id,
          },
          'RANDOM_TOKEN_SECRET', {
            expiresIn: '24h'
          });
        res.status(200).json({
          userId: user.id,
          name: user.firstName + ' ' + user.lastName,
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


// gets one item from the data-base by matching it against an id
exports.getOneUser = (req, res, next) => {
  (async function () {
    let user = await User.findOne({
      where: {
        id: req.body.userId
      }
    });
    return user;
  })().then(
    (user) => {
      res.status(200).json(user);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}

// gets one item from the data-base by matching it against an id and deletes it
exports.deleteUser = (req, res, next) => {
  (async function () {
    let user = await User.findOne({
      where: {
        id: req.body.userId
      }
    });
    return user;
  })().then(
    (user) => {
      user.destroy();

      res.status(200).json(user);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}