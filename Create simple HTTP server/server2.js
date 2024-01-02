const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write("Welcome to my application");

  if (req.url == "/product") {
    res.end("This is product page");
  } else if (req.url == "/user") {
    res.end("This is user page");
  }
});

server.listen(3100);
