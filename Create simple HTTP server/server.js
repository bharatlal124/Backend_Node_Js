//Import http library / module
//by using require function

const http = require("http");

//create server

const server = http.createServer((req, res) => {
  //here comes the request
  res.end("Welcome to NODE JS server");
});

//Specify a port to listen to client request

server.listen(3100, () => {
  console.log("The Server is running at Port 3100");
});
