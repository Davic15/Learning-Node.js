const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome to my Node.js Server</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Create User</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/user') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome to my Node.js Server</title></head>');
        res.write('<body><ul><li>David</li><li>Diego</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user') { 
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log(message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/user');
        res.end();
    }
}


module.exports = {
    handler: requestHandler
}