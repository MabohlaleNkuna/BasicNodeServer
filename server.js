const http = require('http');


const port = 3000;
const hostname = 'localhost';


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'my first Node.js server!' }));
    } else if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            res.writeHead(200);
            res.end(JSON.stringify({ message: 'Data received', data: body }));
        });
    } else {
  
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
