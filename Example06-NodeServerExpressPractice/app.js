const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/user');
const mainRoute = require('./routes/main');

// to use css
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use(mainRoute);

app.listen(3000);