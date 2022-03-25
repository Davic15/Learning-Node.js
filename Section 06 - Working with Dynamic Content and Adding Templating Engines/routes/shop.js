const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.products);
  //* change the response
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  //* we can send data
  const products = adminData.products;
  res.render('shop', {prods: products, docTitle: 'Shop'});
});

module.exports = router;
