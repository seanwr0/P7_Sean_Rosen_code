const fs = require('fs');


require('dotenv').config();
const {
  Sequelize,
  DataTypes
} = require('sequelize');



const sequelize = new Sequelize('project7', 'postgres', process.env.postGresPass, {
  host: 'localhost',
  dialect: 'postgres'
});



let {
  Post
} = require('../models/post');


// creates a post object and saves it to the data-base
exports.createPost = async (req, res, next) => {

  if (req.file) {
    req.body.post = JSON.parse(req.body.post);
    const url = req.protocol + '://' + req.get('host');


    await sequelize.sync({});
    const post = Post.build({
      title: req.body.post.postTitle,
      text: req.body.post.postText,
      imageUrl: url + '/images/' + req.file.filename,
      name: req.body.post.name,
      userIds: [req.body.post.userId]
    });
    await post.save();

  } else {

    try {
   
      await sequelize.sync({});
      const newPost = Post.build({
        title: req.body.postTitle,
        text: req.body.postText,
        imageUrl: req.body.imageUrl,
        name: req.body.name,
        userIds: [req.body.userId]
      });

      await newPost.save();
      res.status(201).json({
        message: 'post saved to database!'
      });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
};


// retrieves all sauces from data-base and returns them as an array
exports.getAllPost = (req, res, next) => {
  (async function () {
    let post = await Post.findAll()
    return post;
  })().then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// gets one item from the data-base by matching it against an id
exports.getOnePost = (req, res, next) => {
  (async function () {
    let post = await Post.findOne({
      where: {
        id: req.body.id
      }
    });
    return post;
  })().then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}

exports.updatePostIds = (req, res, next) => {
  (async function () {

    let post = await Post.findOne({
      where: {
        id: req.body.postId
      }
    });

    let id = req.body.userId
    if (post.userIds.includes(id)) {
      return "id already added"

    } else {
      Post.update({
        'userIds': sequelize.fn('array_append', sequelize.col('userIds'), req.body.userId)
      }, {
        'where': {
          'id': req.body.postId
        }
      });
      return "id added";

    }

  })().then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}