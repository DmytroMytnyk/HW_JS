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




