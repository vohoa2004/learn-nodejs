const http = require('http'); //http co san trong node.js

const hostname = '127.0.0.1'; //this IP is equal to localhost
const port = 3000;

// function inside will render the content of the website 
const server = http.createServer((req, res) => {
    console.log('run request ...')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello world! </h3>');
    res.write('<h2>from ERIC & HOI DAN IT </h2>');
    res.write('<h1>I will try my best!</h1/>');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Node.JS server is running on port: ${port}`);
});