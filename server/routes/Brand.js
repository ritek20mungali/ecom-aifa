const express=require('express');
const router=express.Router();
const {fetchBrands,createBrand} = require('../controller/Brand_controller')


router.post('/',createBrand);
router.get('/',fetchBrands);


module.exports=router;