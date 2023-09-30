exports.getRandom = (length, notChars) => {
	let result = "";

	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	if (notChars) characters.replace(notChars, "");
	const charactersLength = characters.length;

	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
};

exports.getValidateError = (validate) => {
	let errors = [];

	Object.values(validate.errors.errors).forEach((error) => {
		errors.push(error[0]);
	});

	return errors;
};
