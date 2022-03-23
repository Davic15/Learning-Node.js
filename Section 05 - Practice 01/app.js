//* Import third-party modules
const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('Hello from users page');
    res.send('<h1>Hello from Users page!</h1>')
});

app.use('/', (req, res, next) => {
    console.log('Hello from the main Path');
    res.send('<h1>Hello from the Main Page.</h1>')
})

app.listen(3000);