// node specific modules
const http = require('http');

// third party modules
const express = require('express');

const app = express();

// middleware for users
app.use('/users', (req, res, next) => {
    console.log("User middleware!");
    res.send('<h1>Welcome to users page</h1>');
});

// middleware for index
app.use('/', (req, res, next) => {
    console.log("Main page middleware!");
    res.send('<h1>Hello from the index page!</h1>');
})

// listen for the connection
app.listen(3000);