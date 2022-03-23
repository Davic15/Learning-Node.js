//* Creation of the products
const path = require('path');
const express = require('express');

const rootDir = require ('../util/path');

const router = express.Router();
//* change app for router and the server works jut fine.

//* The request goes from top to bottom, and if we don't call next we are not going to the next middleware, if we dont use next the request will match 'add-product' and response
//* and the next middleware won't be called
router.get('/add-product', (req, res, next) => {
    console.log('I am in another Middleware!');
    //* res.send send html, easier than vanilla node.js
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    //*If you send a response you can't send next

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//* This middleware with app.use runs for both, get and post requests
//* We can use app.get for get requests or app.post for post requests
router.post('/add-product', (req, res, next) => {
    //* req.body doesn't parse the content
    console.log(req.body);
    //* Redirect to /
    res.redirect('/');
});

module.exports = router;