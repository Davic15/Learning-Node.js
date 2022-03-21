const fs = require('fs');

const requestHandler = (req, res) => {
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
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            //* Sync stands for syncronous in this method (block the execution till it finished).
            //fs.writeFileSync('message.txt', message);
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
}

//* Export a module, global object

//* 1)
//module.exports = requestHandler;

//* 2)
module.exports = {
    handler: requestHandler,
    someText: "Some Text from Routes."
};

//* 3)
/*exports.handler = requestHandler;
exports.someText = 'Some Text from Routes.';*/

