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
	toString() {
		const now = new Date();
		return now;
	},
	getDateByFormat(format) {
		const now = new Date();

		switch (format) {
			case 'mm/dd/yyyy hh:mm':                    // 'mm/dd/yyyy hh:mm' -  20/11/2021 17:20
				return now.toLocaleString()                

			case 'mm/dd/yyyy':                         // 'mm/dd/yyyy' -  20/11/2021
				return now.toLocaleDateString()            

			case 'Day of the week, dd m yyyy hh:mm':    // 'Day of the week, dd m yyyy hh:mm'  - Sat 20 Now 2021 18:43:59 GMT
				return now.toUTCString()                   

      case 'yyyy-mm-ddThh:mm:ss.000Z':            // 'yyyy-mm-ddThh:mm:ss.000Z'  -  2021-11-20T18:43:59.000Z
        return now.toISOString()                   

			default:                                    //'Day of the week, dd Month yyyy' Sat 20 Now 2021
				return now.toDateString()                  
		}
	},
  getMaxDayOfMonth(year, month) {
    return new Date (year, month, 0);
  },

  isLeapYear(year){
    return this.getMaxDay(year,2).getDate() === 29;
  },
 };