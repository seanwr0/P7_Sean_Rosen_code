const express = require('express');
const router = express.Router();
router.use(express.json());
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
router.post('/post', auth, multer, postCtrl.createPost);
router.get('/post',  postCtrl.getAllPost);
router.post('/post/page',  postCtrl.getOnePost);
router.put('/post/page',  postCtrl.updatePostIds);


module.exports = router;