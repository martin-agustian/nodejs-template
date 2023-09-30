const db = require("../configs/Sequelize.config");
const User = db.User;

exports.list = async (req, res, next) => {
	const users = await User.findAll();

	res.status(200).json({
		message: "success fetch data",
		result: users,
	});
};

exports.store = async (req, res, next) => {
	const { name, email, phone } = req.body;

	let user = await User.findOne({ where: { email: email } });

	if (user) {
		res.status(409).json({
			message: "email already exist",
			result: user,
		});
	}
	else {
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
};
