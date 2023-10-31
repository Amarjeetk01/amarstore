
const express = require('express');
const { fetchItemsById, addToCartById, updateCart, removeItem } = require('../controller/Cart');

const router=express.Router();

router.get('/',fetchItemsById)
      .post('/',addToCartById)
      .patch('/:id',updateCart)
      .delete('/:id',removeItem)

exports.router=router;

