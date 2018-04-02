'use strict';
function yearOfBirth (age) {
	return 2018 - age;
}
const whoAmI = function(name, age) {
	var yob = yearOfBirth(age);
	console.log(`My name is ${name} and I'm ${age} years old.`);
	console.log(`I was born in ${yob}.`);
}

whoAmI('Chris', 29);

