const db = require("../configs/Sequelize.config");
const Validator = require("validatorjs");

// databases
const User = db.User;

// helper
const { getValidateError } = require("../helpers/Get.helper");

exports.list = async (req, res, next) => {
	const users = await User.findAll();

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
