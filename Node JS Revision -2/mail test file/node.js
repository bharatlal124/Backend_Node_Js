const nodemailer = require("nodemailer");

async function sendMail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bharatlalsohna@gmail.com",
      pass: "vjkr nkyl exkh cpkl",
    },
  });

  const mailoptions = {
    from: "bharatlalsohna@gmail.com",
    to: "digitalbharat15@gmail.com",
    subject: "Hey Bharat! Your OTP is here.",
    text: `Your One Time Password (OTP) for DigitalBharat is : 123456`,
  };

  try {
    const result = await transporter.sendMail(mailoptions);
    console.log("email sent success");
  } catch (err) {
    console.log(`Email sending failed ${err}`);
  }
}
sendMail();
