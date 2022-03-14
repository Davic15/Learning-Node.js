// Global module http.
const http = require('http');

const server = http.createServer(function(req, res) {
    console.log(req);
});

// Start the process to listen incoming requests
server.listen(3000);