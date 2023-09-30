const db = require("../configs/Sequelize.config");
const User = db.User;

exports.login = (req, res, next) => {

}

exports.register = async (req, res, next) => {
  const randomNum = Math.random();
	const user = await User.create({ username: "user " + randomNum, name: "user " + randomNum });  

  res.status(200).json({
		message: "success store data",
		result: user,
	});
}

exports.forgotPassword = (req, res, next) => {

}