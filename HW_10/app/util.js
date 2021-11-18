// Standart input definition
const STDIN = {
  getStringInput(message, validation) {
		let input
		do {
			input = prompt(message) ?? '';
		} while (validation(input));
		return input;
	},
                                                   
	getNumberInput(message, validation) {
		let input
		do {
        input = prompt(message)
        if (!input) {
          (input = NaN);
        } else {
          input = Number(input);
        }
		} while (isNaN(input) || validation(input));
		return input;
	},
}

// DATA definition
const DATA = {
  getMaxDayOfMonth(year, month) {
    return new Date (year, month, 0);
  },

  isLeapYear(year){
    return this.getMaxDay(year,2).getDate() === 29;
  },
 };

// Fabric function for creating users
const userFabric = function (firstName, lastName, birthYear, birthMonth, birthDay) {
	return {
		firstName,
		lastName,
    birthYear,
		birthMonth,
		birthDay,
    get fullName() {
			return `${this.firstName} ${this.lastName}`;
		},
	
		set fullName(value) {
			const firstName = value.split(' ')[0];
			const lastName = value.split(' ')[1];
	
			if (firstName) {
				this.firstName = firstName;
			}
	
			if (lastName) {
				this.lastName = lastName;
			}
		},
   
		get fullAge() {
			const actualMonth = this.month - 1

			const now = new Date();

			const originBirthDay = new Date(year, actualMonth, day);
			const birthDay = new Date(now.getFullYear(), actualMonth, day);

			const fullAge = birthDay.getFullYear() - originBirthDay.getFullYear();

			if (now > birthDay) {
				return fullAge;
			} else {
				return fullAge - 1;
			}
		} 
	}
}

// Fabric function for creating archive
const archiveFabric = function () {
	const entries = [];

	return {
		add(item) {
			entries.push(item);
		},
		delete(index) {
			const deleted = entries.splice(index, 1);
			return deleted[index];
		},
		find(cb) {
    	return entries.find(cb);
		},
		filter(cb){
			return entries.filter(cb)
		},
    each(cb){
      return entries.forEach(cb)
    },
    take(start, end) {
			let newEntries = entries.slice(start, end);
			return newEntries;   
		},
		isEmpty() {
      if(entries.length <= 0)
			return true
		},
		count() {
      if(entries.length >= 0)
			return entries.length;
		}
	}
}

