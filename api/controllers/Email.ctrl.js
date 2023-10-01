exports.forgotPassword = async (req, res, next) => {
  const { to, subject } = req.body;

	await EmailHelper.send({
		fromName: process.env.NODEMAILER_NAME,
		fromEmail: process.env.NODEMAILER_USER,
		subject: subject,
		to: to,
		html: "forgot password html template",
	}).catch(error => {
		logger.log({
			level: "error",
			message: JSON.stringify({
				id: to,
				message: error
			})
		});

		res.status(200).json({
			message: "error send email to" + to,
		});
	});

	res.status(200).json({
		message: "success send email to" + to,
	});
};
