const express = require("express");

const server = express();

server.get("/", (req, res) => {
  return res.send("welcome to express");
});

server.use(express.static("public"));

server.listen(3000, () => {
  console.log("server listing");
});
