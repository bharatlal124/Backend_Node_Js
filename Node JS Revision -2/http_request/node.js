const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log(body); // Print the received data in the console
      res.end("Data is recieved");
    });
  } else {
    res.end("welcome to page");
    console.log("server is end");
  }
});

server.listen(3200);
console.log("server is listning");

// const server = http.createServer((req,res)=>{

// })
