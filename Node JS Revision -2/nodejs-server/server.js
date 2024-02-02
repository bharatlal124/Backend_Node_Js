const http = require("http");

const server = http.createServer((req, res) => {
  res.write("this is coming from Node js");

  console.log(req.url);
  if (req.url == "/first") {
    return res.end("heelo first page of nodde js");
  }
  res.end("this is defsault page");
});

server.listen(3000, (req, res) => {
  console.log("server is listing 3000");
});
