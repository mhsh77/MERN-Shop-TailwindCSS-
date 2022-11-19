const express = require('express');
const router = express.Router();



const { getProducts,newProduct,getSingleProduct,updateProduct,deleteProduct }= require('../controllers/productController')

const {isAuthenticatedUser, authorizedRoles} = require('../middlewares/auth')


router.route('/products').get(getProducts);
router.route('/admin/product/new').post(isAuthenticatedUser,authorizedRoles('admin'),newProduct);
router.route('/product/:id').get(getSingleProduct)
router.route('/admin/product/update/:id').put(isAuthenticatedUser,authorizedRoles('admin'),updateProduct)
router.route('/admin/product/delete/:id').delete(isAuthenticatedUser,authorizedRoles('admin'),deleteProduct)
module.exports = router;