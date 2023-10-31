
const express = require('express');
const { createUserInfo, fetchUserInfoDetails, updateUserInfo } = require('../controller/UserInfo');



const router=express.Router();


router.post('/',createUserInfo)
      .get('/:id', fetchUserInfoDetails)
      .patch('/:id',updateUserInfo)

exports.router=router;

