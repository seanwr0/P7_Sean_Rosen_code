const fs = require('fs');
let {
  Post
} = require('../models/post');


// creates a post object and saves it to the data-base
exports.createPost = (req, res, next) => {

  if (req.file) {
    req.body.post = JSON.parse(req.body.post);
    const url = req.protocol + '://' + req.get('host');

    (async function () {
      await sequelize.sync({});
      const post = Post.build({
        title: req.body.Post,
        post: req.body.email,
        imageUrl: url + '/images/' + req.file.filename,
        userIds: req.body.userIds
      });
      await post.save();
    })()
  } else {

    (async function () {
      await sequelize.sync({});
      const post = Post.build({
        title: req.body.Post,
        post: req.body.email,
        userIds: req.body.userIds
      });
      await post.save();
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
  }

};


// retrieves all sauces from data-base and returns them as an array
exports.getAllPost = (req, res, next) => {
  (async function () {
    let post = await Post.findAll({
      where: {
        email: req.body.email
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
};

// gets one item from the data-base by matching it against an id
exports.getOnePost = (req, res, next) => {
  (async function () {
    let post = await Post.findOne({
      where: {
        email: req.body.email
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