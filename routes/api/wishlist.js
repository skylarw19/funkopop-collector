const express = require('express');
const router = express.Router();
const wishlistCtrl = require('../../controllers/wishlist');

/*------------------------------ Public Routes ------------------------------*/

// router.get('/', checkAuth, wishlistCtrl.index);

/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.use(require('../../config/auth'));
router.get('/', checkAuth, wishlistCtrl.index);
router.post('/', checkAuth, wishlistCtrl.create); 
router.put('/:id', wishlistCtrl.update);
router.delete('/:id', wishlistCtrl.delete)


/*----------------------------- Helper Functions ----------------------------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
