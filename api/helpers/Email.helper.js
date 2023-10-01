const transporter = require("../configs/Nodemailer.config");

exports.send = ({ to, subject, formName, fromEmail, html }) => {
  return transporter.sendMail({
    from: '"'+formName+'" <'+fromEmail+'>',
    to: to,
    subject: subject,
    html: html,
  });
}
