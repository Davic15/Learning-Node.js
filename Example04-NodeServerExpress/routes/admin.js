const express = require('express');

const router = express.Router();

// middleware
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    //res.send('<h1>The "Add Product" page</h1>')
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
});

// triggers only gor get/post request
// /admin/add-product => POST
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;