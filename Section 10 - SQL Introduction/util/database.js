const mysql = require('mysql2');

//* Connection pool (many connections)
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'david150888'
});

module.exports = pool.promise();