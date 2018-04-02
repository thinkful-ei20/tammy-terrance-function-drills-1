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
}

try {
	whoAmI('Chris', 29);
	whoAmI();
	whoAmI('blake', -5);
} catch(e) {
	console.error(e.message);
}