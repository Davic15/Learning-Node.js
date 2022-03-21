/** 
 * First App using Node.js
 * ! Deprecated method, do not use
 * ? Should this method be exposed in the Public API?
 * TODO: refactor this methos so that is conforms to the API
 * @param MyParam the parameter for this method.
*/
    
//* To run the script just write node app.js.
//* File system allows to work with the filesystem.
const fs = require('fs');

//* This code can run in the browser but can run also in node.
console.log("Hello from Node.js");

//* The method writeFileSync in fs, allows to work with files.
//* First parameter the file to work with. and the second one is the content.
fs.writeFileSync('hello.txt', 'Hello from Node.js');



