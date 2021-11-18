// From first HW
const currentYear = 2021;

var birthYear = +prompt('When is your birth year?', 1986);

var birthMonth = +prompt('When is your birth month?', 4);

var birthDay = +prompt('When is your birthday?', 24);

var userAge = currentYear - birthYear;

var firstName = prompt('What is your first name?', 'Dmytro');

var lastName = prompt('What is your last name?', 'Mytnyk');

var fullName = firstName + ' ' + lastName;

// Astrological Zodiac symbol name determination
if (birthMonth==1 && (birthDay>=20 && birthDay<=31) || birthMonth==2 && birthDay<=18) {
  var zodiacSymbol = 'Aquarius♒';
} else if (birthMonth==2 && (birthDay>=19 && birthDay<=29) || birthMonth==3 && birthDay<=20) {
  var zodiacSymbol = 'Pisces♓';
} else if (birthMonth==3 && (birthDay>=21 && birthDay<=31) || birthMonth==4 && birthDay<=19) {
  var zodiacSymbol = 'Aries♈';
} else if (birthMonth==4 && (birthDay>=20 && birthDay<=30) || birthMonth==5 && birthDay<=20) {
  var zodiacSymbol = 'Taurus♉';
} else if (birthMonth==5 && (birthDay>=21 && birthDay<=31) || birthMonth==6 && birthDay<=20) {
  var zodiacSymbol = 'Gemini♊';
} else if (birthMonth==6 && (birthDay>=21 && birthDay<=30) || birthMonth==7 && birthDay<=22) {
  var zodiacSymbol = 'Cancer♋';
} else if (birthMonth==7 && (birthDay>=23 && birthDay<=31) || birthMonth==8 && birthDay<=22) {
  var zodiacSymbol = 'Leo♌';
} else if (birthMonth==8 && (birthDay>=23 && birthDay<=31) || birthMonth==9 && birthDay<=22) {
  var zodiacSymbol = 'Virgo♍';
} else if (birthMonth==9 && (birthDay>=23 && birthDay<=30) || birthMonth==10 && birthDay<=22) {
  var zodiacSymbol = 'Libra♎';
} else if (birthMonth==10 && (birthDay>=23 && birthDay<=31) || birthMonth==11 && birthDay<=21) {
  var zodiacSymbol = 'Scorpio♏';
} else if (birthMonth==11 && (birthDay>=22 && birthDay<=30) || birthMonth==12 && birthDay<=21) {
  var zodiacSymbol = 'Sagittarius♐';
} else if (birthMonth==12 && (birthDay>=22 && birthDay<=31) || birthMonth==1 && birthDay<=19) {
  var zodiacSymbol = 'Capricorn♑';
} else {
  document.write("Incorrect date of birth!");
} 

//Leap year determination
var isLeapYear = null;

var moduleOf400 = birthYear%400 === 0;
var moduleOf100 = birthYear%100 === 0;
var moduleOf4 = birthYear%4 === 0;

if (moduleOf400 || (!moduleOf100 && moduleOf4)) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}

if (isLeapYear) {
  var typeYear = ' (leap year)';
} else {
  var typeYear = '';
}

//Result
document.write('User Bio: ' + fullName + ', ' + userAge + ' years old' + typeYear + ', ' + zodiacSymbol + ';')
