/**
 * @param obj
 * @param rest
 * @returns {*}
 */
const optionalChaining = (obj, ...rest) => {
    let tmp = obj;
	for(let key in rest) {
		let name = rest[key];
		tmp = tmp?.[name];
	}
	return tmp || "66";
};

export {
	optionalChaining as
	default
}
export {
	optionalChaining
}