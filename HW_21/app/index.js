/////There is a set of functions//////
	// Error simulator 
	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const randomizeError = () => {
		const random = getRandomIntInclusive(1, 100);

		if (random > 90) {
			return new Error(`Bad Request: ${new Date()}`);
		}
	
		return null;
	};
	
	// Simulator of a query in a database to a table of users.
	const getUsers = (callback) => {
		const USERS = [
			{id: 1, name: 'Bob'},
			{id: 2, name: 'Andy'},
			{id: 3, name: 'John'},
	];

	setTimeout(() => {
			callback(randomizeError(), USERS);
	}, 2000);
	};

	// Simulator of a query in a database to a table of products.
	const getProducts = (callback) => {
		const PRODUCTS = [
			{id: 1, name: 'iPad'},
			{id: 2, name: 'Google Pixel'},
			{id: 3, name: 'War and Peace'},
			{id: 4, name: 'iPad'},
			{id: 5, name: 'Kaizen'},
			{id: 6, name: 'Sherlock Holmes'},
		];

		setTimeout(() => {
			callback(randomizeError(), PRODUCTS);
		}, 2000);
	};

	// Simulator of a query in a database to a table of order.
	const getOrders = (callback) => {
	const ORDERS = [
			{id: 1, userId: 1, checkout: [1, 6]},
			{id: 2, userId: 1, checkout: [3]},
			{id: 3, userId: 2, checkout: [2, 4]},
		];
	
	setTimeout(() => {
			callback(randomizeError(), ORDERS);
		}, 2000);
	};


////Callbacks//////////
const userId = 2;

const getCheckoutsForUser = (userId, cb) => {
	getUsers((err, users) => {
		if (err) {
			cb(err);

			return;
		}

		const user = users.find((user) => user.id === userId);

		if (!user) {
			cb(new Error('User was not found'));

			return;
		}

		getOrders((err, orders) => {
			if (err) {
				cb(err);

				return;
			}
		
			const userOrders = orders.filter(order => order.userId === user.id);

			if (!userOrders) {
				cb(new Error('User has not added any orders yet'));
				
			if (userOrders) {
				cb(users.map(user => user.userOrders.map(userOrdersId => userOrders.find(or.id === userOrdersId))))
			}	
				return;
			}

			cb(null, userOrders);
		});
	});
};

getCheckoutsForUser(1, (err, checkout) => {
	if (err) {
		console.error(err);
	} else {
		console.log(checkout);
	}
});


//////Promises////////////////
	// Error simulator - the same as above is repeated

	// Simulator of a query in a database to a table of users.
	const getUsers = () => {
		const USERS = [
			{id: 1, name: 'Bob'},
			{id: 2, name: 'Andy'},
			{id: 3, name: 'John'},
		];

	const err = randomizeError();

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(err) {
				reject(err);
			}
			  resolve(USERS);
			}, 2000);
		})
	};

	// Simulator of a query in a database to a table of products.
	const getProducts = () => {
		const PRODUCTS = [
			{id: 1, name: 'iPad'},
			{id: 2, name: 'Google Pixel'},
			{id: 3, name: 'War and Peace'},
			{id: 4, name: 'iPad'},
			{id: 5, name: 'Kaizen'},
			{id: 6, name: 'Sherlock Holmes'},
		];

		const err = randomizeError();

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(err) {
					reject(err);
				}
					resolve(PRODUCTS);
			}, 2000);
		})
	};

	// Simulator of a query in a database to a table of order.
	const getOrders = () => {
		const ORDERS = [
				{id: 1, userId: 1, checkout: [1, 6]},
				{id: 2, userId: 1, checkout: [3]},
				{id: 3, userId: 2, checkout: [2, 4]},
			];
		
			const err = randomizeError();

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(err) {
					reject(err);
				}
					resolve(ORDERS);
			}, 2000);
		})
	};

   // Chain of promises
	const getCheckoutsForUserAsPromise = new Promise((userId) => {
		return getUsers().then(users => {
			const user = users.find((user) => user.id === userId);
			if (!user) {
				throw new Error('User was not found');
			}
			return user;   
		}).then(user => {
			return getOrders().then(orders => {
				let userOrders = [];
				for (let i = 0; i < orders.length; i++){
					if (orders[i].userId === user.id) {
						userOrders.push(orders[i]);  
					}
				}
			if (userOrders.length === 0) {
				throw	new Error('User has not added any orders yet');
			}
			return userOrders;
		}).then(userOrders => {
			getProducts().then(products => {
				for (let i = 0; i < userOrders.length; i++){
					for (let j = 0; j < userOrders[i].checkout.length; j++) {
						userOrders[i].checkout[j] = products.find((product) => product.id === userOrders[i].checkout[j]);
					}
				}
				console.log(userOrders)
			});
		});
	})
	.then(console.log)
	.catch(console.error)
})


///////Async/await////////////
const result = (data, timeout = 2000) => new Promise(resolve => setTimeout(() => { resolve(data)
}, timeout));

const USERS = [
	{id: 1, name: 'Bob'},
	{id: 2, name: 'Andy'},
	{id: 3, name: 'John'},
];

const PRODUCTS = [
	{id: 1, name: 'iPad'},
	{id: 2, name: 'Google Pixel'},
	{id: 3, name: 'War and Peace'},
	{id: 4, name: 'iPad'},
	{id: 5, name: 'Kaizen'},
	{id: 6, name: 'Sherlock Holmes'},
];

const ORDERS = [
	{id: 1, userId: 1, checkout: [1, 6]},
	{id: 2, userId: 1, checkout: [3]},
	{id: 3, userId: 2, checkout: [2, 4]},
];

 const getUsers = () => result(USERS);
 const getProducts = () => result(PRODUCTS);
 const getOrders = () => result(ORDERS);

(async () => {
	try {
const getCheckoutsForUserAsPseudoSync = await Promise.all([
	getUsers(),
	getProducts(),
	getOrders()
])

const [users, products, orders] = getCheckoutsForUserAsPseudoSync;

	const user = users.find((user) => user.id === userId);
		if (!user) {
			throw new Error('User was not found');
		}
		let userOrders = [];
			for (let i = 0; i < orders.length; i++){
				if (orders[i].userId === user.id) {
					userOrders.push(orders[i]);  
				}
			}
		if (userOrders.length === 0) {
			throw	new Error('User has not added any orders yet');
		}
		for (let i = 0; i < userOrders.length; i++){
			for (let j = 0; j < userOrders[i].checkout.length; j++) {
				userOrders[i].checkout[j] = products.find((product) => product.id === userOrders[i].checkout[j]);
			}
		}
		console.log(userOrders)
	}catch (err) {
		console.error(err);
	}	
})()

                                      


