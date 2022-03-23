//* Handle products
const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


//* Express has not a default response.
//* We can add the path/route at the beginning 
router.get('/', (req, res, next) => {
    console.log('I am in another Middleware!');
    //* res.send send html, easier than vanilla node.js
    //res.send('<h1>Hello from Express!</h1>');
    //* This path doesn't point to the project folder. We need to recreate the correct path
    //res.sendFile('../views/shop.html');
    //* __dirname points to the  project folder. It handles the path doesn't matter the operating system.
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

module.exports = router;
