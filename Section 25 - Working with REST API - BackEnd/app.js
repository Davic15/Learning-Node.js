/**
 * First define app.js
 * Second define routes
 * Third define controllers
 * CORS problems can be fixed in the server side. not in the browser
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
const mongoose = require('mongoose');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const app = express();

//* Working with files
const fileStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') +  file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false)
    }
}
//* Working with files

//* x-www-form-urlencoded<form></form> for data inside a form
//*app.use(bodyParser.urlencoded());

//* parsin json -> application/json
app.use(bodyParser.json());

//* multer for files
app.use(multer({ storage: fileStorage, fileFilter: fileFilter}).single('image'));

//*work with images (path)
app.use('/images', express.static(path.join(__dirname, 'images')))

//* CORS problem
app.use((req, res, next) => {
    //* * all domains or specific domain
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

//* Error middleware to handle errors
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message })
})

//*Connection with mongodb using mongoose
mongoose.connect('mongodb+srv://david:david150888@cluster0.c4d9j.mongodb.net/messages?retryWrites=true&w=majority')
.then(result => {
    app.listen(8080);
})
.catch(err => {
    console.log(err)
});