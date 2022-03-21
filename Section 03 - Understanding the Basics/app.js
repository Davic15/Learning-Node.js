/** 
 * Section 3 - Understanding the Basics
*/

//* The common name is app.js for the server.
//* Node.js contains functionally already included. We don't need to import them.
//* Core modules are: http (Launch a server, send request), https (Launch a SSL server), fs (file system to work with files), path (handle paths in different Operating Systems), os

//* Import file (own JS files), or a core module.
const http = require('http');
const fs = require('fs');

//* Function neeeded by createServer method or use and annoymous function
function rqListener(req, res) {

}
//* createServer method
const server = http.createServer((req, res) => {
    //* It contains the url
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My First page</title></head>');
        //* Form check inside the form and send data (if add a name in the input, it will be send in the POST request)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html');
        return res.end();
    }
    if (url === "/message" && method === 'POST') {
        const body = [];
        //* It creates an event on Node.js, the data event i will use. What to parse and the function to work with
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });
        //* Event will be triggered when the parse is done.
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        //fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
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
});

//* Listen for incomming requests
server.listen(3000);

//* The program is running in a loop waiting for requests