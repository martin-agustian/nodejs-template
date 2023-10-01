const transporter = require("../configs/Nodemailer.config");

exports.send = ({ to, subject, fromName, fromEmail, html }) => {
  return transporter.sendMail({
    from: '"'+fromName+'" <'+fromEmail+'>',
    to: to,
    subject: subject,
    html: html,
  });
}
