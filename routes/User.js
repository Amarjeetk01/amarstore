
const express = require('express');
const {  loginUser, createUsers, checkUser, resetPasswordRequest, resetPassword } = require('../controller/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { authenticateUser } = require('../service/Common');

const router=express.Router();
router.post('/', createUsers)
  .get('/check', checkUser)
  .post('/login',passport.authenticate('local'), loginUser) 
  .post('/reset-password-request', resetPasswordRequest) 
  .post('/reset-passwords', resetPassword)
exports.router=router;

