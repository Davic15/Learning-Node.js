//* Node Modules
const path = require('path');
//* Third Party Modules
const express = require('express');
const bodyParser = require('body-parser');
//* My own files
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//* This middleware will parse the content body. Will parse the content of the form
app.use(bodyParser.urlencoded({extended: false}));

//* Work with the public Folder (CSS), and send the path
app.use(express.static(path.join(__dirname, 'public')));

//* Middleware method
//* It will be execute for every incomming request. Work with 3 arguments. next is a function passing to the function, allows to go to the next middleware;
//app.use((req, res, next) => {
    //console.log('I am in the Middleware!');
    //* next here allows us to go to the next middleware. If we dont call next, we send a response and never go to the next middleware
    //next(); //* Allows the request to continue to the next middle in line
//});

//* Routes work as a normal middleware, and should be placed it in the correct order
//* Order matters all the time
//* Adding a path (/admin)
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//* 404 page
app.use((req, res, next) => {
    //res.status(404).send('<h1>Page not found!</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

/*
const server = http.createServer(app);
server.listen(3000);*/
//* Those two lines above can be merge in one using Express.js
app.listen(3000);