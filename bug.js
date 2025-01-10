const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({message: 'Hello from Node.js!'}));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Uncommon Error:  Unexpected Server Shutdown
//This error occurs when the server unexpectedly closes before the client finishes the request.  It is often caused by unhandled exceptions or process termination.  While this code works as is, let's make it robust.