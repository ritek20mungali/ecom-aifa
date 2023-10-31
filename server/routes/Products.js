const express=require('express');
const router=express.Router();
const { createProduct,fetchAllProducts,fetchProductById} = require('../controller/Product_controller');


router.post('/',createProduct);
router.get('/',fetchAllProducts);
router.get('/:id',fetchProductById);


module.exports=router;