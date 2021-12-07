const DOM = ((root) => {
	const mount = (node) => {
		root.replaceChildren(node);
	};

	const createElement = (parent, options = {}) => {
		let el;
		if (typeof parent === 'string') {
			el = document.createElement(parent);
		} else if (parent.nodeType === 1) {
			el = parent;
		} else if (parent.nodeType === 11) {
			el = parent;
		}
	
		const { props = {}, children = [] } = options;
			for (const propKey of Object.getOwnPropertyNames(props)) {
			const prop = props[propKey];
				el.setAttribute(propKey, prop);
		}
	
		for (const child of children) {
			switch (typeof child) {
			case 'string':
				el.insertAdjacentHTML('afterbegin', child);
				break;
			
			default:
				el.append(child);
				break;
			}
		}
	
		return el;
	};

	return {
		createElement,
		mount
	};
})(document.getElementById('root'));

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


const Header = () => {
	return DOM.createElement('header', {
		children: [
			'<h1>HW№-16 - Manipulations</h1>'
		]
	})
};

const Main = () => {
	const date = DATA.getDateByFormat('1');
	return DOM.createElement('main', {
		children: [
			DOM.createElement('section', {
				children: [
					DOM.createElement('ul', {
						children: [
							DOM.createElement('li', {
								children: [
									DOM.createElement('span', {
										children: [
											DOM.createElement('a', {
												props: {
													href: "/",
												},
												children: [
													'Home',
												]
											}),
											DOM.createElement('a', {
												props: {
													href: "/about",
												},
												children: [
													'About Page',
												]
											})
										]
									})
								]
							})
						]
					})
				]
			}),	
			DOM.createElement('section', {
				children: [
						DOM.createElement('div', {
							children: [
								DOM.createElement('span', {
									children: [
										`<span>${date}</span>` 
									]
								})
							]
						})		
					],
				}),
			DOM.createElement('section', {
				children: [
					DOM.createElement('ul', {
						children: [
							DOM.createElement('li', {
								children: [
									`User: <span>${firstName}</span> <span>${lastName}</span> - <span>${age}</span>	years old`
								]
							})
						]
					})
				]
			})
		]
	})  
};

const App = () => {
	return DOM.createElement('root',{
		children: [
			Header(),
			Main()
		]
	})
};

DOM.mount(App());