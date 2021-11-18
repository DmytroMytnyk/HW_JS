// Function for getting of operation number
const getOperationInput = function(message, operation) {
  let input;
  do {
    input = +prompt(message);
  } while (!operation.includes(input)) 
  return input;
}
        
// Function for getting of numerical values
const getNumberInput = function(message, min, max) {
let input;
do {
  input = prompt(message, min, max)
  if (!input) {
    (input = NaN);
  } else {
    input = Number(input);
  }
} while (isNaN(input) || min > input || max < input);
return input;
} 

// Function for user's age calculation
function calculateAge(userBirthYear, userBirthMonth, userBirthDay) {
  nowDate = new Date();

  let years = (nowDate.getFullYear() - userBirthYear);

  if (nowDate.getMonth() < userBirthMonth || 
  nowDate.getMonth() == userBirthMonth && nowDate.getDate() < userBirthDay) {
      years--;
  }

  return years;
}

// Function for getting of literal values
const getStringInput = function(message, min, max) {
let input;
do {
  input = prompt(message) ?? '';
  } while (min > input.trim().length || input.trim().length > max);
return input;
}
	
//Function for leap year calculation 
const isYearType = function(year) {
	if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    isLeapYear = 'leap year';
  } else {
    isLeapYear = 'not leap year';
  }
  return isLeapYear;
}

//Function for zodiac sign definition
const zodiacs = [
  [1, 20, 31], [2, 18], 'Aquarius♒',  
  [2, 19, 29], [3, 20], 'Pisces♓',
  [3, 21, 31], [4, 19], 'Aries♈',  
  [4, 20, 30], [5, 20], 'Taurus♉',
  [5, 21, 31], [6, 20], 'Gemini♊',  
  [6, 21, 30], [7, 22], 'Cancer♋',
  [7, 23, 31], [8, 22], 'Leo♌',  
  [8, 23, 31], [9, 22], 'Virgo♍',
  [9, 23, 30], [10, 22], 'Libra♎',  
  [10, 23, 31], [11, 21], 'Scorpio♏',
  [11, 22, 30], [12, 21], 'Sagittarius♐',  
  [12, 22, 31], [1, 19], 'Capricorn♑',
];
const getSignZodiac = function(zodiacs, month, day) {
  let input;
  for(var i = 0; i < zodiacs.length; i+=3) {
    if(month === zodiacs[i][0] && day >= zodiacs[i][1] && day <= zodiacs[i][2] ||
      month === zodiacs[i + 1][0] && day <= zodiacs[i + 1][1]) {
      input = zodiacs[i + 2];
    }    
  }
  return input;
}

//Function for maximum days of month definition
const getMaxDayOfMonth = function(month) {
  let input;
    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
      input = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11 ) {
			input = 30;
		} else {
      input = isLeapYear ? 29 : 28;
    }
    return input;
}

// Function for showing of user
const showUsers = function(arr) {
    for (const user of arr) {
      console.log(user);
    }
  }

 

