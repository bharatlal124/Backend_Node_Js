const express = require("express");

const server = express();

server.get("/", (req, res, next) => {
  console.log("This is first middleware");
  next();
});

server.get("/", (req, res) => {
  res.send("this is send middleware");
});

server.listen(3100, () => {
  console.log("server is listing on 3100");
});
