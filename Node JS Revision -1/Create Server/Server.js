// const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("welcome hello world");
});

server.listen(3100, () => {
  console.log("server start at 3100");
});

// server.listen(3100);

// console.log("hii sevrer request end");
