const basicForm = document.forms.signUp;
const output = document.getElementById('output');
const state = { };

const validation = {
	email: (value) => !value.includes('@'),
	password: (value) => value.length < 9 || value.length > 24,
	passwordConfirm: (value, rest) => rest.password !== value,
	consent: (checked) => !checked,
};

const errors = {
	email: true,
	password: true,
	passwordConfirm: true,
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

const handleSubmit = (event) => {
  	event.preventDefault();
  
  	let nodes = [];
  
  	for (const stateKey of Object.getOwnPropertyNames(state)) {
  		const value = state[stateKey];
  
  		const span = document.createElement('p');
      if (nodes.length <=1) {
        span.innerText = `${stateKey}: ${value}`;
          nodes.push(span);
      }
  	}
  	output.replaceChildren(...nodes);
  };

basicForm.addEventListener('change', handleChange);
basicForm.addEventListener('submit', handleSubmit);
