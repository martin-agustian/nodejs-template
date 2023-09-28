const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
	process.env.DB_DATABASE,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: "mysql",
		define: {
			freezeTableName: true,
		},
	}
);

sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch((error) => {
		console.error("Unable to connect to the database: ", error);
	});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// models
db.User = require("../models/User.model")(sequelize, Sequelize);

// sync models
db.sequelize
	.sync({ force: false, alter: true })
	.then((result) => {
		console.log("Database sync successfully.");
	})
	.catch((error) => {
		console.error("Unable to sync database: ", error);
	});

module.exports = db;
