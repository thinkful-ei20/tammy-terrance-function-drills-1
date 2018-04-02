'use strict';
function yearOfBirth (age) {
	return 2018 - age;
}
const whoAmI = function(name, age) {
	var yob = yearOfBirth(age);
	console.log(`My name is ${name} and I'm ${age} years old.`);
	console.log(`I was born in ${yob}.`);

	if (age < 0) {
		throw new Error('Age cannot be negative.');
	} 
	if (name === undefined || age === undefined) {
		throw new Error('Arguements not valid');
	}
	if (typeof name !== 'string' || typeof age !== 'number') {
		throw new Error('Not a valid data type, please try again.');
	}

}

try {
	whoAmI('Chris', 29);
	whoAmI();
	whoAmI('blake', -5);
	whoAmI(test, 'test');
} catch(e) {
	console.error(e.message);
}