const APPLICATION  = {
	archive: archiveFabric(),  
	OPERATIONS: [
		['Add user', 'addUser'],
		['Delete user', 'deleteUser'],
		['Find user', 'findUser'],
		['Filter user by name', 'filterUser'],
		['Iterate users by index', 'eachUser'],
		['Show some users', 'takeUser'],
		['Is archive empty?', 'isEmpty'],
		['Number of users', 'countUser'],
	],
		begin() {
		do {
			const operationIndex = this.getOperation();
			this.runOperation(operationIndex)
		} while (confirm('Do you want to continue?'));

		this.end();
	},

	getOperation() {
		const minNumberOper = 0;
		const maxNumberOper = this.OPERATIONS.length-1;
		const validationOperation = function(input) {
	    return minNumberOper > input.length || input.length > maxNumberOper ;
    };

		const right = function(item, i){
			return (` ${i} : ${item[0]} `).toString()
		}
		const message = this.OPERATIONS.map(right);
		
		const operationIndex = STDIN.getNumberInput(`Enter operation:  ${message} ;`, validationOperation);
		
		return operationIndex;	
	},
	

	runOperation(operationIndex) {
				const operation = this.OPERATIONS[operationIndex];
		
				if (operation) {
					const operationMethod = operation[1];
		
					this[operationMethod]();     
				}
			},

	end() {
		console.log('Buy Buy')
	},

	addUser() {
		const minFirst = 1;
		const maxFirst = 20;
		const validationFirst = function(input) {
	    return minFirst > input.trim().length || input.trim().length > maxFirst;
    };
		const firstName = STDIN.getStringInput(`Put your first name: min signs: ${minFirst}, max signs: ${maxFirst}`, validationFirst);

		const minLast = 1;
		const maxLast = 30;
		const validationLast = function(input) {
	    return minLast > input.trim().length || input.trim().length > maxLast;
    };
		const lastName = STDIN.getStringInput(`Put your last name: min signs: ${minLast}, max signs: ${maxLast}`, validationLast);

		const minYear = 1900;
		const current = new Date();
		const maxYear = current.getFullYear();
		const validationYear = function(input) {
	    return minYear > input || maxYear < input;
    };
		const birthYear = STDIN.getNumberInput(`Put your year of birth: only numbers, min: ${minYear}, max: ${maxYear}`,validationYear);
		
		const minMonth = 1;
		const maxMonth = 12;
		const validationMonth = function(input) {
	    return minMonth > input || maxMonth < input;
    };
		birthMonth = STDIN.getNumberInput('Put your month of birth: only numbers, min: 1, max: 12',validationMonth);
		
		const minDay = 1;
		const maximum = DATA.getMaxDayOfMonth(birthYear, birthMonth);
		const maxDay = maximum.getDate();
		const validationDay = function(input) {
	    return minDay > input || maxDay < input;
    };
		birthDay = STDIN.getNumberInput(`Put your day of birth: only numbers, min: ${minDay}, max: ${maxDay}`,validationDay);
		
		
		const user = userFabric(firstName, lastName, birthYear, birthMonth, birthDay);

		this.archive.add(user);
	},

	deleteUser() {
		if (this.archive.isEmpty()) {
			console.log('Sorry! Archive is empty!');
			return undefined;
		}
		const minIndex = 0;
		const maxIndex = this.archive.count() - 1;
		const validationDelete = function(input) {
	    return minIndex > input || maxIndex < input;
    };
		const indexToDelete = STDIN.getNumberInput(`Enter the number of the user you want to delete, min: ${minIndex}, max: ${maxIndex}`, validationDelete);

		const deleted = this.archive.delete(indexToDelete);

		console.log(`User ${indexToDelete} deleted successfully`)
		return deleted;
	},

	findUser() {
		const minFind = 1;
		const maxFind = 20;
		const validationFind = function(input) {
	    return minFind > input.trim().length || input.trim().length > maxFind;
    };
		const indexToFind = STDIN.getStringInput(`Enter user first name to search: min signs: ${minFind}, max signs: ${maxFind}`,validationFind); 
    const findUserByName = function(user) {  
      return user.firstName === indexToFind;   
    }
    const finded = this.archive.find(findUserByName);

      if (finded) {
        console.log('Here is the user you\'ve been looking for:', finded);
      } else {
        console.log('There is not such user');
      }
	},

	filterUser() {
		const minfilter = 1;
		const maxfilter = 20;
		const validationfilter = function(input) {
	    return minfilter > input.trim().length || input.trim().length > maxfilter;
    };
		const indexToFilter = STDIN.getStringInput(`Enter user\'s name you want filter: min signs: ${minfilter}, max signs: ${maxfilter}`,validationfilter); 
    const filterUserByName = function(user) {
      return user.firstName === indexToFilter;   
    }
		const filtered = this.archive.filter(filterUserByName);  
    console.log('All filtered users:', filtered);

	},
	
	eachUser() {
		const showUsers = function(user, index) {  
     console.log(`Index of user ${user.fullName} is ${index}`)  
    }
		const iterated = this.archive.each(showUsers);  
    return iterated;
	},

	takeUser() {
		const minFrom = 0;
		const maxTo = this.archive.count() - 1;
		const validationTake = function(input) {
	    return minFrom > input || maxTo < input;
    };
		const indexFromSlice = STDIN.getNumberInput(`Enter the user\'s number FROM which you want to slice the array, min: ${minFrom} max: ${maxTo}`, validationTake);
		const indexToSlice = STDIN.getNumberInput(`Enter the user\'s number TO which you want to slice the array, min: ${minFrom} max: ${maxTo}`,validationTake);

		const slicedArray = this.archive.take(indexFromSlice, indexToSlice);  
		console.log('Sliced array of users:', slicedArray);
	},

	isEmpty() {
		const state = this.archive.isEmpty(this.archive.length); 
		if (state) {
			console.log('Archive is empty?', state);
		} else {
			console.log('Some users exist in array');
		}
	},

	countUser() {
		const counted = this.archive.count(this.archive.length); 
		console.log('Number of users in the archive:', counted);
	},
}
APPLICATION.begin();