class Timestamp {
	constructor() {
		this.nowFormat = new Date();
	}

	getDateByFormat(format) {
	  return this.nowFormat.toISOString()
  }

	getDateByFormat(format) {
	  return this.nowFormat.toUTCString() 
  }
}

const USER_DATE = {
	firstName(){
		const minFirst = 1;
		const maxFirst = 20;
		const validationFirst = function(input) {
	    return minFirst > input.trim().length || input.trim().length > maxFirst;
    };
		return STDIN.getStringInput(`Put your first name: min signs: ${minFirst}, max signs: ${maxFirst}`, validationFirst);
	},
	lastName() {
		const minLast = 1;
		const maxLast = 30;
		const validationLast = function(input) {
	    return minLast > input.trim().length || input.trim().length > maxLast;
    };
		return STDIN.getStringInput(`Put your last name: min signs: ${minLast}, max signs: ${maxLast}`, validationLast);
	},
	date(){
		let newDate = new Date();
		return newDate.toLocaleString()
	},
	age() {
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
		const birthMonth = STDIN.getNumberInput('Put your month of birth: only numbers, min: 1, max: 12',validationMonth);
		
		const minDay = 1;
		const maximum = DATA.getMaxDayOfMonth(birthYear, birthMonth);
		const maxDay = maximum.getDate();
		const validationDay = function(input) {
	    return minDay > input || maxDay < input;
    };
		const birthDay = STDIN.getNumberInput(`Put your day of birth: only numbers, min: ${minDay}, max: ${maxDay}`,validationDay);
		
		const actualMonth = birthMonth - 1

		const now = new Date();

		const originBirthDay = new Date(birthYear, actualMonth, birthDay);
		const birthDate = new Date(now.getFullYear(), actualMonth, birthDay);

		const age = birthDate.getFullYear() - originBirthDay.getFullYear();

		if (now > birthDate) {
			return age;
		} else {
			return age - 1;
		}	
	}
}

class App {
	constructor() {
		this.list = document.querySelector('.list');
		this.timestamp = document.querySelector('.timestamp');
	}
  render() {
    const items = this.list.children; 
		for (let item of items) {
			const spans = document.querySelectorAll('span');
				for (const span of spans) {
				const dataField = span.getAttribute('data-field')
				  if (dataField in USER_DATE) {
					span.innerHTML = USER_DATE[dataField]()
				 }
			}
		}
		const readyAll = document.querySelectorAll('.list__item');
		for (let ready of readyAll) {
	  ready.classList.add('list__item--ready')  
		}
	} 

		update() {
			const currentTimestamp = new Timestamp();
			this.timestamp.innerHTML = currentTimestamp.getDateByFormat('3')
			this.timestamp.setAttribute('datetime', currentTimestamp.getDateByFormat('4'));
		} 
}

const currentRender = new App().render(); 
const currentUpdate = new App().update(); 

