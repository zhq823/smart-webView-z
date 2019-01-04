export class iStorage {
	
	constructor() {}
	
	static set(key, value) {
		sessionStorage.removeItem(key);
		value = JSON.stringify(value)
		sessionStorage.setItem(key, value);
	}

	static get(key) {
		const value = JSON.parse(sessionStorage.getItem(key))
		return value;
	}

	static remove(key) {
		sessionStorage.removeItem(key);
	}

	static clear() {
		sessionStorage.clear();
	}
}
