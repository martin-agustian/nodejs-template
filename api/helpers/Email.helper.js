const transporter = require("../configs/Nodemailer.config");

// const base = ({ to, subject, formName, fromEmail }) => {
//   return new Promise (async (resolve, reject) => {
//     await transporter.sendMail(
//       {
//         from: '"'+formName+'" <'+fromEmail+'>',
//         to: to,
//         subject: subject,
//         // html: html,
//         text: "Hello world?",
//         html: "<b>Hello world?</b>"
//       },
//       function (error, info) {
//         if (error) reject(error);
//         else return resolve("Email sent: " + info.response);
//       }
//     );
//   });
// }

exports.send = ({ to, subject, formName, fromEmail }) => {
  // return new Promise (async (resolve, reject) => {
  //   await transporter.sendMail(
  //     {
  //       from: '"'+formName+'" <'+fromEmail+'>',
  //       to: to,
  //       subject: subject,
  //       // html: html,
  //       text: "Hello world?",
  //       html: "<b>Hello world?</b>"
  //     },
  //     function (error, info) {
  //       if (error) reject(error);
  //       else return resolve("Email sent: " + info.response);
  //     }
  //   );
  // });

  return transporter.sendMail({
    from: '"'+formName+'" <'+fromEmail+'>',
    to: to,
    subject: subject,
    // html: html,
    text: "Hello world?",
    html: "<b>Hello world?</b>"
  });
}
