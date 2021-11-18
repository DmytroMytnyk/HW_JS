//Global array
const USERS = [];
const ALLOWED_OPERATIONS = [0, 1, 2, 3];
const YEAR_INDEX = 0, YEAR_TYPE_INDEX = 1, MONTH_INDEX = 2, DAY_INDEX = 3, F_NAME_INDEX = 4, L_NAME_INDEX = 5, ZODIAC_INDEX = 6;
const CURRENT_YEAR = 2021;

//Cycles for one authorization
do {

  console.clear();

	let operation;

	do {
		operation = +prompt('Enter operation: 1 - add, 2 - delete, 3 - show');
	} while (!ALLOWED_OPERATIONS.includes(operation))
	
	switch (operation) {   
		
    case 1: {               // User add operation 
		let user = [];

      //Request the user's birthyear
  const minYear = 1900;
  const maxYear = CURRENT_YEAR;
  
  const validationMessageYear = `Put your year of birth: only numbers, min: ${minYear}, max: ${maxYear}`;
    do {
    user[YEAR_INDEX] = prompt(validationMessageYear)
    if (!user[YEAR_INDEX]) {
      (user[YEAR_INDEX] = NaN);
    } else {
      user[YEAR_INDEX] = Number(user[YEAR_INDEX]);
    }
  } while (isNaN(user[YEAR_INDEX]) || minYear > user[YEAR_INDEX] || user[YEAR_INDEX] > maxYear);
  
   
    //Leap year determination
  var isLeapYear = null;
  
  var moduleOf400 = user[YEAR_INDEX]%400 === 0;
  var moduleOf100 = user[YEAR_INDEX]%100 === 0;
  var moduleOf4 = user[YEAR_INDEX]%4 === 0;
  
  if (moduleOf400 || (!moduleOf100 && moduleOf4)) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }
  
  if (isLeapYear) {
    user[YEAR_TYPE_INDEX] = ' (leap year)';
  } else {
    user[YEAR_TYPE_INDEX] = '';
  }
  
    //Request the user's birthmonth
  const minMonth = 1;
  const maxMonth = 12;
  
  const validationMessageMonth = `Put your month of birth: only numbers, min: ${minMonth}, max: ${maxMonth}`;
    do {
    user[MONTH_INDEX] = prompt(validationMessageMonth)
    if (!user[MONTH_INDEX]) {
      (user[MONTH_INDEX] = NaN);
    } else {
      user[MONTH_INDEX] = Number(user[MONTH_INDEX]);
    }
    } while (isNaN(user[MONTH_INDEX]) || minMonth > user[MONTH_INDEX] || user[MONTH_INDEX] > maxMonth);

     
    //Request the user's birthday
  const minDay = 1;
  let maxDay = null;
  
  switch (user[MONTH_INDEX]) {
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
    do {
    user[DAY_INDEX] = prompt(validationMessageDay)
    if (!user[DAY_INDEX]) {
      (user[DAY_INDEX] = NaN);
    } else {
      user[DAY_INDEX] = Number(user[DAY_INDEX]);
    }
    } while (isNaN(user[DAY_INDEX]) || minDay > user[DAY_INDEX] || user[DAY_INDEX] > maxDay);
  
    
    //Determination of age
  var userAge = CURRENT_YEAR - user[YEAR_INDEX];
  
  
    //Request the user's first name
  const minLenthName = 1;
  const maxLenthName = 20;
  
  const validationMessageName = `Put your first name: min: ${minLenthName}, max: ${maxLenthName}`;
    
    do {
      user[F_NAME_INDEX] = prompt(validationMessageName) ?? '';
      } while (minLenthName > user[F_NAME_INDEX].trim().length || user[F_NAME_INDEX].trim().length > maxLenthName);

    //Request the user's last name
  const minLenth = 1;
  const maxLenth = 30;
  
  const validationMessageLast = `Put your last name: min: ${minLenth}, max: ${maxLenth}`;
    
    do {
      user[L_NAME_INDEX] = prompt(validationMessageLast) ?? '';
      } while (minLenth > user[L_NAME_INDEX].trim().length || user[L_NAME_INDEX].trim().length > maxLenth);

    
    //Determination of full name
  var fullName = user[F_NAME_INDEX] + ' ' + user[L_NAME_INDEX];
  
  
    //Astrological Zodiac symbol name determination
  if (user[MONTH_INDEX]==1 && (user[DAY_INDEX]>=20 && user[DAY_INDEX]<=31) || user[MONTH_INDEX]==2 && user[DAY_INDEX]<=18) {
    user[ZODIAC_INDEX] = 'Aquarius♒';
  } else if (user[MONTH_INDEX]==2 && (user[DAY_INDEX]>=19 && user[DAY_INDEX]<=29) || user[MONTH_INDEX]==3 && user[DAY_INDEX]<=20) {
    user[ZODIAC_INDEX] = 'Pisces♓';
  } else if (user[MONTH_INDEX]==3 && (user[DAY_INDEX]>=21 && user[DAY_INDEX]<=31) || user[MONTH_INDEX]==4 && user[DAY_INDEX]<=19) {
    user[ZODIAC_INDEX] = 'Aries♈';
  } else if (user[MONTH_INDEX]==4 && (user[DAY_INDEX]>=20 && user[DAY_INDEX]<=30) || user[MONTH_INDEX]==5 && user[DAY_INDEX]<=20) {
    user[ZODIAC_INDEX] = 'Taurus♉';
  } else if (user[MONTH_INDEX]==5 && (user[DAY_INDEX]>=21 && user[DAY_INDEX]<=31) || user[MONTH_INDEX]==6 && user[DAY_INDEX]<=20) {
    user[ZODIAC_INDEX] = 'Gemini♊';
  } else if (user[MONTH_INDEX]==6 && (user[DAY_INDEX]>=21 && user[DAY_INDEX]<=30) || user[MONTH_INDEX]==7 && user[DAY_INDEX]<=22) {
    user[ZODIAC_INDEX] = 'Cancer♋';
  } else if (user[MONTH_INDEX]==7 && (user[DAY_INDEX]>=23 && user[DAY_INDEX]<=31) || user[MONTH_INDEX]==8 && user[DAY_INDEX]<=22) {
    user[ZODIAC_INDEX] = 'Leo♌';
  } else if (user[MONTH_INDEX]==8 && (user[DAY_INDEX]>=23 && user[DAY_INDEX]<=31) || user[MONTH_INDEX]==9 && user[DAY_INDEX]<=22) {
    user[ZODIAC_INDEX] = 'Virgo♍';
  } else if (user[MONTH_INDEX]==9 && (user[DAY_INDEX]>=23 && user[DAY_INDEX]<=30) || user[MONTH_INDEX]==10 && user[DAY_INDEX]<=22) {
    user[ZODIAC_INDEX] = 'Libra♎';
  } else if (user[MONTH_INDEX]==10 && (user[DAY_INDEX]>=23 && user[DAY_INDEX]<=31) || user[MONTH_INDEX]==11 && user[DAY_INDEX]<=21) {
    user[ZODIAC_INDEX] = 'Scorpio♏';
  } else if (user[MONTH_INDEX]==11 && (user[DAY_INDEX]>=22 && user[DAY_INDEX]<=30) || user[MONTH_INDEX]==12 && user[DAY_INDEX]<=21) {
    user[ZODIAC_INDEX] = 'Sagittarius♐';
  } else if (user[MONTH_INDEX]==12 && (user[DAY_INDEX]>=22 && user[DAY_INDEX]<=31) || user[MONTH_INDEX]==1 && user[DAY_INDEX]<=19) {
    user[ZODIAC_INDEX] = 'Capricorn♑';
  } else {
    console.log("Incorrect date of birth!");
  } 
  
    //Adding a user to global array
  USERS.push(user);
    break;
}

case 2: {             //User delete operation     
  let indexToDeleteUser;
 
  if (USERS.length > 0) {
    (confirm('Do you want to delete user?'))
  } else {
    alert("Sorry! No user for delete!");
    break;
  }

  const minIndex = 0;
  const maxIndex = USERS.length - 1;
do {
    indexToDeleteUser = parseInt(prompt(`Enter the number of the user you want to delete, min: ${minIndex}, max: ${maxIndex}`));
  } while(indexToDeleteUser < 0 || indexToDeleteUser > maxIndex || isNaN(indexToDeleteUser));

  let deletedUser = USERS.splice(indexToDeleteUser, 1);
  console.log(`User ${deletedUser} deleted successfully`)
  console.log(`There are ${USERS.length} users more in the archive`)

  break;
}

  case 3: {              //User show operation
    console.log('List of all users:')
    for (const user of USERS) {
        console.log(user);
  }

  break;
}

default:
  break;
}
  
} while (confirm('Do you want to continue?'))
  
 //End and exit
 console.log('Buy, Buy! See you later!');

