const express=require('express');
const router=express.Router();
const {fetchCategory,createCategory} =require('../controller/Category_controller')


router.post('/',createCategory);
router.get('/',fetchCategory);


module.exports=router;