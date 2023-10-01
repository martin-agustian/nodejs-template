const db = require("../configs/Sequelize.config");

// models
db.User = require("../models/User.model")(db.sequelize, db.Sequelize);
db.Log = require("../models/Log.model")(db.sequelize, db.Sequelize);

// sync models
db.sequelize
	.sync({ force: true })
	.then((result) => {
		console.log("Database sync successfully.");
	})
	.catch((error) => {
		console.error("Unable to sync database: ", error);
	});

module.exports = db;