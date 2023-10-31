
const express = require('express');
const { createProduct,fetchDataByFilter, fetchDataById,  } = require('../controller/Product');

const router=express.Router();


router.post('/',createProduct)
      .get(`/`,fetchDataByFilter)
      .get('/:id',fetchDataById)

exports.router=router;

