const currentYear = 2021;

var birthYear = prompt('When is your birth year?', 1986);
birthYear = Number(birthYear);

var userAge = currentYear - birthYear;

var firstName = prompt('What is your first name?', 'Dmytro');

var lastName = prompt('What is your last name?', 'Mytnyk');

var fullName = firstName + ' ' + lastName;

document.write('User Bio: ' + fullName + ', ' + userAge + ' years old;');


