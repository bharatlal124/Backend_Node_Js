const express = require("express");

const server = express();

function firstmiddleware(req, res, next) {
  console.log("this is first midd");
  next();
}

function secondmiddleware(req, res, next) {
  console.log("this is second midd");
  next();
}

// function logrequest(req, res, next) {
//   if (req.method === "GET" && req.path === "/") {
//     console.log(`${method} ${path}`);
//   }
//   next();
// }

const logrequest = () => {
  server.get("/", (req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
  });
};

function globalmidd(req, res, next) {
  console.log("This is app - level midd");
  next();
}

logrequest();
// server.use(logrequest);
server.use(globalmidd);

server.get("/", [firstmiddleware, secondmiddleware], (req, res) => {
  res.send("Hello world");
  next();
});

server.listen(3100, () => {
  console.log("server is listing on 3100");
});
