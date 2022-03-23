//* Node Modules
//* Third Party Modules
const express = require('express');

const app = express();

//* Middleware method
//* It will be execute for every incomming request. Work with 3 arguments. next is a function passing to the function, allows to go to the next middleware;
app.use((req, res, next) => {
    console.log('I am in the Middleware!');
    //* next here allows us to go to the next middleware. If we dont call next, we send a response and never go to the next middleware
    next(); //* Allows the request to continue to the next middle in line
});

//* Express has not a default response.

app.use((req, res, next) => {
    console.log('I am in another Middleware!');
    //* res.send send html, easier than vanilla node.js
    res.send('<h1>Hello from Express!</h1>');
});

/*
const server = http.createServer(app);
server.listen(3000);*/
//* Those two lines above can be merge in one using Express.js
app.listen(3000);