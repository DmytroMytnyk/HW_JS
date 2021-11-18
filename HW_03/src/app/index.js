//Cycle for first authorization
do {
  const currentYear = 2021;
  
    //Request the user's birthyear
  const minYear = 1900;
  const maxYear = currentYear;
  
  const validationMessageYear = `Put your year of birth: only numbers, min: ${minYear}, max: ${maxYear}`;
  let birthYear;
  do {
    birthYear = prompt(validationMessageYear)
    if (!birthYear) {
      (birthYear = NaN) || (birthYear = null);
    } else {
      birthYear = Number(birthYear);
    }
  } while (isNaN(birthYear) || (minYear > birthYear) || (birthYear > maxYear) || birthYear === null);
  
  
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
  
    //Request the user's birthmonth
  const minMonth = 1;
  const maxMonth = 12;
  
  const validationMessageMonth = `Put your month of birth: only numbers, min: ${minMonth}, max: ${maxMonth}`;
  let birthMonth;
  do {
    birthMonth = prompt(validationMessageMonth)
    if (!birthMonth) {
      (birthMonth = NaN) || (birthMonth = null);
    } else {
      birthMonth = Number(birthMonth);
    }
    } while (isNaN(birthMonth) || (minMonth > birthMonth) || (birthMonth > maxMonth) || birthMonth === null);
  
  
    //Request the user's birthday
  const minDay = 1;
  let maxDay = null;
  
  switch (birthMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      maxDay = 31;
      break;
  
    case 4:
    case 6:
    case 9:
    case 11:
      maxDay = 30;
      break;
  
    default:
      maxDay = isLeapYear ? 29 : 28;
  }
  
  
  const validationMessageDay = `Put your day of birthday: only numbers, min: ${minDay}, max: ${maxDay}`;
  let birthDay;
  do {
    birthDay = prompt(validationMessageDay)
    if (!birthDay) {
      (birthDay = NaN) || (birthDay = null);
    } else {
      birthDay = Number(birthDay);
    }
    } while (isNaN(birthDay) || (minDay > birthDay) || (birthDay > maxDay) || birthDay === null);
  
  
    //Determination of age
  var userAge = currentYear - birthYear;
  
  
    //Request the user's first name
  const minLenthName = 1;
  const maxLenthName = 20;
  
  const validationMessageName = `Put your first name: min: ${minLenthName}, max: ${maxLenthName}`;
  let firstName;
  
  do {
    firstName = prompt(validationMessageName)
    } while ((minLenthName > firstName.length) || (firstName.length > maxLenthName) || firstName === null);
  
  
    //Request the user's last name
  const minLenth = 1;
  const maxLenth = 30;
  
  const validationMessageLast = `Put your last name: min: ${minLenth}, max: ${maxLenth}`;
  let lastName;
  
  do {
    lastName = prompt(validationMessageLast)
    } while ((minLenth > lastName.length) || (lastName.length > maxLenth) || lastName === null);
  
    
    //Determination of full name
  var fullName = firstName + ' ' + lastName;
  
  
    //Astrological Zodiac symbol name determination
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
  
    //Result
  document.write('User Bio: ' + fullName + ', ' + userAge + ' years old' + typeYear + ', ' + zodiacSymbol + ';')
  
  } while (confirm('Do you want to continue?'))
  