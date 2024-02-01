const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  //   res.write("welcome hello world");

  if (req.url == "/product") {
    res.end("this is product page");
  } else if (req.url == "/user") {
    res.end("tis is uyser page");
  }
});

server.listen(3000, () => {
  console.log("server listen 3000");
});
