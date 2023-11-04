
const express = require('express');
const {  loginUser, createUsers, checkUser, resetPasswordRequest, resetPassword, logout } = require('../controller/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router=express.Router();
router.post('/', createUsers)
  .post('/login',passport.authenticate('local'), loginUser) 
  .get('/check', passport.authenticate('jwt'), checkUser)
  .post('/reset-password-request', resetPasswordRequest) 
  .post('/reset-passwords', resetPassword)
  .get('/logout', logout)
exports.router=router;

