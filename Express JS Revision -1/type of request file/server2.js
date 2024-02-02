const express = require("express");

const server = express();
server.post("/", (req, res) => {
  res.send("this is default req");
});

server.get("/", (req, res) => {
  res.send("this is get req");
});

server.put("/", (req, res) => {
  res.send("this is put req");
});

server.delete("/", (req, res) => {
  res.send("this is delete req");
});

server.listen(3200, () => {
  console.log("server is listining");
});
