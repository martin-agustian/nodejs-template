const transporter = require("../configs/Nodemailer.config");

const send = async (req, res, next) => {
  // const { to, subject, from } = req.body;

  console.log(req);

	// await transporter.sendMail(
	// 	{
	// 		from: '"Fred Foo 👻" <martinagustian@outlook.com>',
	// 		to: to,
	// 		subject: subject,
	// 		text: "Hello world?", 
	// 		html: "<b>Hello world?</b>",
	// 	},
	// 	function (error, info) {
	// 		if (error) {
	// 			console.log(error);
	// 		} else {
	// 			console.log("Email sent: " + info.response);
	// 		}
	// 	}
	// );
};

const emailCtrl = { send };

module.exports = emailCtrl;
