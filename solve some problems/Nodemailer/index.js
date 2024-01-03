// Please don't change the pre-written code
// Import the necessary modules here
// import { info } from "console";
import nodemailer from "nodemailer";
import readline from "readline";
// import readlineSync from "readline-sync";

const Solution = () => {
  // Create a readline interface for user input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Prompt the user for the recipient's email address
  rl.question("Please enter your mail: ", (recipientEmail) => {
    // Create a transporter using Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: "codingninjas2k16@gmail.com",
        pass: "slwvvlczduktvhdj",
      },
    });

    // Define the email options
    const mailOptions = {
      from: "codingninjas2k16@gmail.com",
      to: recipientEmail,
      subject: "Coding Ninjas",
      text: "The world has enough coders; be a coding ninja!",
    };

    // Send the email
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Error sending email:", error);
        rl.close(); // Close the readline interface
      } else {
        console.log("Success: Email sent to", recipientEmail);
        rl.close(); // Close the readline interface
      }
    });
  });
};

export default Solution;
