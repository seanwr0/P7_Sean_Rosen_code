const express = require('express');
const router = express.Router();
router.use(express.json());
const saucesCtrl = require('../controllers/sauces');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
router.post('/sauces', auth, multer, saucesCtrl.createSauce);
router.get('/sauces',  saucesCtrl.getAllSauces);
router.get('/sauces/:id',  saucesCtrl.getOneSauce);
router.delete('/sauces/:id', auth, saucesCtrl.deleteSauce);
router.post('/sauces/:id/like',  auth,saucesCtrl.setLike);
router.put('/sauces/:id', auth, multer, saucesCtrl.updateSauce);
module.exports = router;