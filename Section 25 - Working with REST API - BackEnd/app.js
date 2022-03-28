/**
 * First define app.js
 * Second define routes
 * Third define controllers
 * CORS problems can be fixed in the server side. not in the browser
 */

const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');

const app = express();
//* x-www-form-urlencoded<form></form> for data inside a form
//*app.use(bodyParser.urlencoded());

//* parsin json -> application/json
app.use(bodyParser.json());

//* CORS problem
app.use((req, res, next) => {
    //* * all domains or specific domain
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.listen(8080);