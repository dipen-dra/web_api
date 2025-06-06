const express = require('express');
const router = express.Router();
const productController = require('../../controllers/admin/productmanagment');
// can import router as a whole and use it's function
// const {createProduct} = require('../../controllers/admin/productmanagment');
router.post(
    "/",
    productController.createProduct // using dot, call function
)

router.get(
    "/",
    productController.getProducts // using dot, call function
)

module.exports = router;
