const winston = require("winston");
const winstonMysql = require("winston-mysql");

const logger = winston.createLogger({
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize(),
				winston.format.simple()
			),
		}),
	],
});

// if (process.env.NODE_ENV === "production") {
	logger.add(
		new winstonMysql({      
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			table: process.env.DB_TABLE_LOG,
		})
	);
// }

module.exports = logger;
