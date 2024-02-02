import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailsent(email) {
    this.emit("mail sent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bharatlalsohna@gmail.com",
      pass: "gpmg jmzh nmja sqij",
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk.toString();
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(data);

      const queryString = `Name: ${name}\n Email: ${email}\nMessage:${message}\n\n`;

      fs.appendFile("data.txt", queryString, (err) => {
        if (err) {
          console.log(`Error in appending file : ${err}`);
        } else {
          console.log("Query saved");
          console.log(`User name : ${name}`);
          console.log(`Query: ${message}`);
        }
      });

      const mailoptions = {
        from: "bharatlalsohna@gmail.com",
        to: "digitalbharat15@gmail.com",
        subject: "Query Recevied",
        text: "We have recevied your query and will get back to you soon",
      };

      transporter.sendMail(mailoptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          customEvent.mailsent(email);
        }
      });

      res.end("Query recieved");
    });
  } else {
    res.end("Welcome to coding ninja");
  }
});

const Solution = () => {
  customEvent.addListener("mailsent", (email) => {
    console.log("custom event mailsent emited");
    console.log(`conform that email has been sent successfullt ${email}`);
  });
};

export default server;
export { server, CustomEvent, Solution };
