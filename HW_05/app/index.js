//Global array
const USERS = [];
const ALLOWED_OPERATIONS = [0, 1, 2, 3];
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
		let user = {};

      //Request the user's birthyear
  const minYear = 1900;
  const maxYear = CURRENT_YEAR;
  
  const validationMessageYear = `Put your year of birth: only numbers, min: ${minYear}, max: ${maxYear}`;
    
  do {
    user.birthYear = prompt(validationMessageYear)
    if (!user.birthYear) {
      (user.birthYear = NaN);
    } else {
      user.birthYear = Number(user.birthYear);
    }
  } while (isNaN(user.birthYear) || minYear > user.birthYear || user.birthYear > maxYear);
  
   
    //Leap year determination
  var isLeapYear = null;
  
  var moduleOf400 = user.birthYear%400 === 0;
  var moduleOf100 = user.birthYear%100 === 0;
  var moduleOf4 = user.birthYear%4 === 0;
  
  if (moduleOf400 || (!moduleOf100 && moduleOf4)) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }
  
    if (isLeapYear) {
    user.typeYear = ' (leap year)';
  } else {
    user.typeYear = '';
  }
  
    //Request the user's birthmonth
  const minMonth = 1;
  const maxMonth = 12;
  
  const validationMessageMonth = `Put your month of birth: only numbers, min: ${minMonth}, max: ${maxMonth}`;
    
  do {
    user.birthMonth = prompt(validationMessageMonth)
    if (!user.birthMonth) {
      (user.birthMonth = NaN);
    } else {
      user.birthMonth = Number(user.birthMonth);
    }
    } while (isNaN(user.birthMonth) || minMonth > user.birthMonth || user.birthMonth > maxMonth);

     
    //Request the user's birthday
  const minDay = 1;
  let maxDay = null;
  
  switch (user.birthMonth) {
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
    user.birthDay = prompt(validationMessageDay)
    if (!user.birthDay) {
      (user.birthDay = NaN);
    } else {
      user.birthDay = Number(user.birthDay);
    }
    } while (isNaN(user.birthDay) || minDay > user.birthDay || user.birthDay > maxDay);
  
    
    //Determination of age
   user.userAge = CURRENT_YEAR - user.birthYear;
  
  
    //Request the user's first name
  const minLenthName = 1;
  const maxLenthName = 20;
  
  const validationMessageName = `Put your first name: min: ${minLenthName}, max: ${maxLenthName}`;
  
    do {
      user.firstName = prompt(validationMessageName) ?? '';
      } while (minLenthName > user.firstName.trim().length || user.firstName.trim().length > maxLenthName);

    //Request the user's last name
  const minLenth = 1;
  const maxLenth = 30;
  
  const validationMessageLast = `Put your last name: min: ${minLenth}, max: ${maxLenth}`;
  
    do {
      user.lastName = prompt(validationMessageLast) ?? '';
      } while (minLenth > user.lastName.trim().length || user.lastName.trim().length > maxLenth);

    
    //Determination of full name
   user.fullName = user.firstName + ' ' + user.lastName;
  
  
    //Astrological Zodiac symbol name determination
    if (user.birthMonth==1 && (user.birthDay>=20 && user.birthDay<=31) || user.birthMonth==2 && user.birthDay<=18) {
      var zodiacSymbol = 'Aquarius♒';
    } else if (user.birthMonth==2 && (user.birthDay>=19 && user.birthDay<=29) || user.birthMonth==3 && user.birthDay<=20) {
      var zodiacSymbol = 'Pisces♓';
    } else if (user.birthMonth==3 && (user.birthDay>=21 && user.birthDay<=31) || user.birthMonth==4 && user.birthDay<=19) {
      var zodiacSymbol = 'Aries♈';
    } else if (user.birthMonth==4 && (user.birthDay>=20 && user.birthDay<=30) || user.birthMonth==5 && user.birthDay<=20) {
      var zodiacSymbol = 'Taurus♉';
    } else if (user.birthMonth==5 && (user.birthDay>=21 && user.birthDay<=31) || user.birthMonth==6 && user.birthDay<=20) {
      var zodiacSymbol = 'Gemini♊';
    } else if (user.birthMonth==6 && (user.birthDay>=21 && user.birthDay<=30) || user.birthMonth==7 && user.birthDay<=22) {
      var zodiacSymbol = 'Cancer♋';
    } else if (user.birthMonth==7 && (user.birthDay>=23 && user.birthDay<=31) || user.birthMonth==8 && user.birthDay<=22) {
      var zodiacSymbol = 'Leo♌';
    } else if (user.birthMonth==8 && (user.birthDay>=23 && user.birthDay<=31) || user.birthMonth==9 && user.birthDay<=22) {
      var zodiacSymbol = 'Virgo♍';
    } else if (user.birthMonth==9 && (user.birthDay>=23 && user.birthDay<=30) || user.birthMonth==10 && user.birthDay<=22){
      var zodiacSymbol = 'Libra♎';
    } else if (user.birthMonth==10 && (user.birthDay>=23 && user.birthDay<=31) || user.birthMonth==11 && user.birthDay<=21) {
      var zodiacSymbol = 'Scorpio♏';
    } else if (user.birthMonth==11 && (user.birthDay>=22 && user.birthDay<=30) || user.birthMonth==12 && user.birthDay<=21) {
      var zodiacSymbol = 'Sagittarius♐';
    } else if (user.birthMonth==12 && (user.birthDay>=22 && user.birthDay<=31) || user.birthMonth==1 && user.birthDay<=19){
      var zodiacSymbol = 'Capricorn♑';
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

    do {
    indexToDeleteUser = +prompt(`Enter the number of the user you want to delete, min: 0, max: ${USERS.length-1}`);
  } while(indexToDeleteUser < 0 || indexToDeleteUser > `${(USERS.length-1)+1}` || indexToDeleteUser === null || isNaN(indexToDeleteUser));
  
  let deletedUser = USERS.splice(indexToDeleteUser, 1);
  console.log(`User ${deletedUser} deleted successfully`)
  console.log(`There are ${USERS.length} users more in the archive`)

  break;
}

  case 3: {              //User show operation  ${deletedUser}
    console.log('List of all users:')
    for (const user of USERS) {
        console.log('User: ' + user.fullName + ', ' + user.userAge + ' years old' + user.typeYear + ', ' + zodiacSymbol + ';');
  }

  break;
}

default:
  break;
}
  
} while (confirm('Do you want to continue?'))
  
 //End and exit
 console.log('Buy, Buy! See you later!');

