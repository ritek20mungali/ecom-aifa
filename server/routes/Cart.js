const express=require('express');
const router=express.Router();
const {fetchCartByUser,addToCart,deleteFromCart,updateCart} = require('../controller/Cart_controller')


router.post('/',addToCart);
router.get('/',fetchCartByUser);
router.delete('/:id',deleteFromCart);
router.patch('/:id',updateCart);
 

module.exports=router;