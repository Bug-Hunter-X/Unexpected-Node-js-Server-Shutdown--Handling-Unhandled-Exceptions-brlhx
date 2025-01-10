const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  try {
    // Simulate potential error
    // const data = JSON.parse('{invalid json}');
    response.writeHead(200);
    response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

//Handle unhandled exceptions to prevent process termination
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

//Handle unhandled rejections to prevent process termination
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});