// Global module http.
const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);
//console.log(req.url, req.method, req.headers);
    

// Start the process to listen incoming requests
server.listen(3000);