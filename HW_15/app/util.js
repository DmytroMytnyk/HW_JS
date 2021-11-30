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
		const nowFormat = new Date();

		switch (format) {
			case '1':                                 // 'mm/dd/yyyy hh:mm' -  20/11/2021 17:20
				return nowFormat.toLocaleString()                

			case '2':                                 // 'mm/dd/yyyy' -  20/11/2021
				return nowFormat.toLocaleDateString()            

			case '3':                                 // 'Day of the week, dd m yyyy hh:mm'  - Sat 20 Now 2021 18:43:59 GMT
				return nowFormat.toUTCString()                   

      case '4':                                  // 'yyyy-mm-ddThh:mm:ss.000Z'  -  2021-11-20T18:43:59.000Z
        return nowFormat.toISOString()                   

			default:                                  //'Day of the week, dd Month yyyy' Sat 20 Now 2021
				return nowFormat.toDateString()                  
		}
	},
  getMaxDayOfMonth(year, month) {
    return new Date (year, month, 0);
  },

  isLeapYear(year){
    return this.getMaxDay(year,2).getDate() === 29;
  },
 };