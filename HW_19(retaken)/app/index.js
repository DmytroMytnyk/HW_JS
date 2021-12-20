const login = document.forms.login;
const user = document.querySelector('h2');
const loginSection = root.firstElementChild;
const hiddenSection = root.lastElementChild;

const state = { };

const validation = {
	email: (value) => !value.includes('@'),
	password: (value) => !'admin',
  consent: (checked) => !checked,
};

const errors = {
	email: true,
	password: true,
  consent: true
};

const handleChange = (event) => {
	const { type, name, value, checked } = event.target;
	switch (type) {
	case 'checkbox':
		state[name] = checked;
		break;
	
	default:
		state[name] = value;
		break;
	}

	errors[name] = name in validation ? validation[name](state[name], state) : false;

	event.currentTarget.submitBtn.disabled = Object.keys(errors).some(key => errors[key]);
};
debugger
const handleSubmit = (event) => {
	event.preventDefault();
	const cookie = COOKIE.setCookie('email', 'admin@example.com', {'max-age': 60*60*24,  'path': '/' });
	let nodes = [];

	for (const stateKey of Object.getOwnPropertyNames(state)) {
		const value = state[stateKey];
		const span = document.querySelectorAll('span');
			if (nodes.length <=1) {
			span.innerText = cookie;
				nodes.push(span);
		}
	}
	user.replaceChildren(...nodes);
};

	const isCookieExist = () => {
		if (user.cookie) {
			return hiddenSection;
		} else {
			return loginSection;
		}
	};
  isCookieExist();

  login.addEventListener('change', handleChange);
  login.addEventListener('submit', handleSubmit);

    




