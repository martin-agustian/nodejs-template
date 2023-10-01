const transporter = require("../configs/Nodemailer.config");

exports.sendEmail = async (req, res, next) => {
  const { to, subject, from } = req.body;

	await transporter.sendMail(
		{
			from: '"Fred Foo 👻" <martinagustian@outlook.com>',
			to: to,
			subject: subject,
			text: "Hello world?", 
			html: "<b>Hello world?</b>",
		},
		function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log("Email sent: " + info.response);
			}
		}
	);
};
