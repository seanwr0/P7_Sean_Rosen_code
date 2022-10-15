const express = require('express');
const router = express.Router();
router.use(express.json());
const userCtrl = require('../controllers/users');
const auth = require('../middleware/auth');

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
router.post('/signup', userCtrl.createUser);
router.post('/login', userCtrl.checkUser)
router.post('/profile', auth, userCtrl.getOneUser)
router.delete('/profile', auth,  userCtrl.deleteUser)

module.exports = router;