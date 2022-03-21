/** 
 * Section 3 - Understanding the Basics
*/

//* The common name is app.js for the server.
//* Node.js contains functionally already included. We don't need to import them.
//* Core modules are: http (Launch a server, send request), https (Launch a SSL server), fs (file system to work with files), path (handle paths in different Operating Systems), os

//* Import file (own JS files), or a core module.
const http = require('http');
const routes = require('./routes');


//* Function neeeded by createServer method or use and annoymous function
function rqListener(req, res) {
    
}
console.log(routes.someText);
//* createServer method
const server = http.createServer(routes.handler);
    
    //console.log(req.url, req.method, req.headers);
    //* Exit the process, and shutdown the server.
    //process.exit();
    //* setHeader send meta data
    //* We can write our page using normal html in chunks.
    //* First setHeader, write and end.
    /*res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First page</title></head>');
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write('</html');
    res.end();*/
    //* request (req) object, is created by node with the data of the request.
    


//* Listen for incomming requests
server.listen(3000);

//* The program is running in a loop waiting for requests