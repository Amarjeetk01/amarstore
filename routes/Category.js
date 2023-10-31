
const express = require('express');
const { fetchDataByCategory, createCategory } = require('../controller/Category');
const router=express.Router();

router.get('/',fetchDataByCategory).post('/',createCategory)

exports.router=router;

