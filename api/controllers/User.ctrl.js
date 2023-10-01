const db = require("../configs/Sequelize.config");
const User = db.User;

const Validator = require("validatorjs");
const logger = require("../configs/Winston.config");

// helpers
const { getValidateError } = require("../helpers/Get.helper");
const EmailHelper = require("../helpers/Email.helper");

exports.list = async (req, res, next) => {	
	const users = await User.findAll();

	try {
		const sendEmail = await EmailHelper.send({
			formName: "martin agustian",
			fromEmail: "martinagustian@yahoo.com",
			subject: "test",
			to: "record1zero@gmail.com",
		}).catch(error => {
			console.log(error);
		})	
	}
	catch (error) {
		logger.log({
			level: "error",
			message: {
				id: "record1zero@gmail.com",
				message: error
			}
		});
	} 

	// console.log(sendEmail);

	res.status(200).json({
		message: "success fetch data",
		result: users,
	});
};

exports.store = async (req, res, next) => {
	let validate = new Validator(
		req.body,
		{
			name: "required",
			email: "required|email",
			phone: "required",
		},
		{
			required: ":attribute is required",
			email: "email is invalid",
		}
	);

	if (validate.passes()) {
		const { name, email, phone } = req.body;

		let user = await User.findOne({ where: { email: email } });

		if (user) {
			res.status(409).json({
				message: "email already exist",
				result: user,
			});
		} else {
			user = await User.create({
				name: name,
				email: email,
				phone: phone,
			});

			res.status(200).json({
				message: "success store data",
				result: user,
			});
		}
	} else {
		res.status(500).json({
			message: getValidateError(validate),
			result: null
		});
	}
};
