const express=require('express');
const router=express.Router();
const {createAddress,fetchAddressByUsername}=require("../controller/Address_controller")

router.post('/',createAddress)
router.get('/',fetchAddressByUsername)


module.exports=router;