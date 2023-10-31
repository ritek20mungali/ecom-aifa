const express=require('express');
const router=express.Router();
const {createUser,loginUser} = require('../controller/Auth_controller')
const {fetchUserById}=require('../controller/User_controller')

router.post('/signup',createUser);
router.post('/login',loginUser);
router.get('/:id',fetchUserById)


module.exports=router;