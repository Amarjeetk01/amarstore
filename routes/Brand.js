
const express = require('express');
const { fetchDataByBrand, createBrand } = require('../controller/Brand');
const router=express.Router();

router.get('/',fetchDataByBrand).post('/',createBrand)

exports.router=router;

