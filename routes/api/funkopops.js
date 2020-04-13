const express = require('express');
const router = express.Router();
const funkopopsCtrl = require('../../controllers/funkopops');

/*------------------------------ Public Routes ------------------------------*/

router.get('/', checkAuth, funkopopsCtrl.index);

/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, funkopopsCtrl.create);

/*----------------------------- Helper Functions ----------------------------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
