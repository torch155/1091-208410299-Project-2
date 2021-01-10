var express = require('express');
var router = express.Router();

const projectController = require('../controllers/projectController_99');

// CREATE
router.post('/cart_99/create', projectController.createCart);

// READ
router.get('/', projectController.getHomepage);
router.get('/cart_99', projectController.getCartInfo);

// UPDATE
router.post('/cart_99/update', projectController.updateCart);

// DELETE
router.get('/cart_99/delete/:id', projectController.deleteCart);

module.exports = router;
