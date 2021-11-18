const USERS = [
];
const ALLOWED_OPERATIONS = [0, 1, 2, 3, 4, 5, 6];
const now = new Date();
do {
  console.clear(); 
  const userOperationInput = getOperationInput('Enter operation: 1 - add users, 2 - delete users, 3 - show users, 4 - show max age, 5 - find user, 6 - show average age', ALLOWED_OPERATIONS);

  const minYear = 1900;
  const maxYear = now.getFullYear();

  const messageBirthYearInput = `Put your year of birth: only numbers, min: ${minYear}, max: ${maxYear}`;
  const MIN_YEAR = `${minYear}`;
  const MAX_YEAR = `${maxYear}`;

  const minMonth = 1;
  const maxMonth = 12;

  const minLenthName = 1;
  const maxLenthName = 20;

  const minLenth = 1;
  const maxLenth = 30;

  switch (userOperationInput) {  

  case 1: {     // User add operation 

    const user = {};
                  
    user.birthYear = getNumberInput(messageBirthYearInput, MIN_YEAR, MAX_YEAR);
        
    user.isLeapYear = isYearType(user.birthYear);

    user.birthMonth = getNumberInput('Put your month of birth: only numbers, min: 1, max: 12', 1, 12);

    const minDay = 1;
    const maxDay = getMaxDayOfMonth(user.birthMonth);
    const messageBirthDayInput = `Put your day of birth: only numbers, min: ${minDay}, max: ${maxDay}`;
    const MIN_DAY = `${minDay}`;
    const MAX_DAY = `${maxDay}`;

    user.birthDay = getNumberInput(messageBirthDayInput, MIN_DAY, MAX_DAY);

    user.userAge = calculateAge(user.birthYear, user.birthMonth, user.birthDay)
        
    user.firstName = getStringInput('Put your first name: min signs: 1, max signs: 20', 1, 20);

    user.lastName = getStringInput('Put your last name: min signs: 1, max signs: 30', 1, 30);

    user.fullName = user.firstName + ' ' + user.lastName;

    user.zodiac = getSignZodiac(zodiacs, user.birthMonth, user.birthDay);

    USERS.push(user);

    break;
  } 

  case 2: {       //User delete operation   
  
    if (USERS.length > 0) {
      (confirm('Do you want to delete user?'))
    } else {
      alert("Sorry! No user for delete!");
      break;
    }

    const messageDeletedUser = `Enter the number of the user you want to delete, min: 0, max: ${USERS.length-1}`;
    const MIN_DEL = 0;
    const MAX_DEL = `${USERS.length-1}`;
    const getDeletedUser = getNumberInput(messageDeletedUser, MIN_DEL, MAX_DEL);

    let deleteUser = USERS.splice(getDeletedUser, 1);

    console.log('User' + ' ' + getDeletedUser + ' ' + 'deleted successfully');
    console.log(`There are ${USERS.length} users more in the archive`);
    break;
  }

  case 3: {        //User show operation
    if (USERS.length < 1) {
      console.log('Sorry! There are no users yet');
    } else {
      console.log('List of all users:') 
      showUsers(USERS)
    }   
     
    break;
  }

  case 4: {      //User's max age show operation              
    const maxYear = getNumberInput('Enter max birth year of a user', 1900, now.getFullYear());
    const showFilteredUsers = function(user) {
    return user.birthYear <= maxYear;   
    }
    const filteredMaxAgeUsers = USERS.filter(showFilteredUsers);
    
    console.log('All users with max age:', filteredMaxAgeUsers);
   
    break;
  }

  case 5: {       //User's find operation 
    const userName = getStringInput('Enter user first name to search', 1, 20); 
    const showUserByName = function(user) {  
      return user.firstName === userName;   
    }
    const findedUser = USERS.find(showUserByName);

      if (findedUser) {
        console.log('Here is the user you\'ve been looking for:', findedUser);
      } else {
        console.log('There is not such user');
      }
    break;
  }

  case 6: {       //User's average age operation
      const reduceUser = function(sum, user) {
      const newState = sum + user.userAge;
      return newState;
      }
      const approxAge = USERS.reduce(reduceUser, 0);
  
      console.log('All users approximate age is', Math.round(approxAge / USERS.length));
    break;
  }

  default:
    break;
  }
  
} while (confirm('Do you want to continue?'))
  
console.log('Buy, Buy! See you later!');

