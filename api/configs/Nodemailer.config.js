const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Outlook365",
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS
  }
});

module.exports = transporter;