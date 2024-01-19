// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here

  if (req.method === "POST") {
    let requestBody = "";

    req.on("data", (data) => {
      requestBody += data.toString();
    });

    req.on("end", () => {
      fs.appendFileSync("data.txt", requestBody);

      const fileContents = fs.readFileSync("data.txt", "utf8");
      console.log(fileContents);

      // req.end("Data received and append to data.txt");
      res.end("data received");
    });
  } else {
    console.log("Function ends here");
    res.end("Welcome to node js");
  }
});

export default server;
