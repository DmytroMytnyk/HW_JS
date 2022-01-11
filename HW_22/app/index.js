////////////// Creating notes
formNote.onsubmit = async (e) => {
	e.preventDefault();
  const headers = new Headers({
    'Content-type': 'application/json; charset=UTF-8',
  })
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos', {
    method: 'POST',
    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    completed: false,
    fakeId: new Date().valueOf(),
    }),
    headers, 
	});

  if (!response.ok) {
    throw new Error(response.statusText);
  }

	const result = await response.json();

	console.log(result);
  } catch (error) {
  		console.error(err);
  }
};

/////////////////// Listing all notes - first option
async function getResponse() {
	let response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
	let content = await response.json()
	content = content.splice(0, 10)
	let listOfNotes = document.querySelector('.notes')
	let key;
	for (key in content){
		listOfNotes.innerHTML += `
		<li class="note">
		<p>${content[key].title}</p>
		<button>X</button>
		</li>	`
	}
}
getResponse()

///////////////// Listing all notes - second option
fetch('https://jsonplaceholder.typicode.com/users/1/todos')
	.then(response => {
		if(response.ok){
			return response.json()
		} else {
			console.log('Error')
			throw Error
		}
	})
	.then(data =>
		document.getElementById('root').innerHTML = 
		JSON.stringify(data)
	)
	.catch(error =>{
		console.log(error)
	})


///////////////////Deleting a note - first option
const deleteMethod = {
  method: 'DELETE', 
  headers: {
   'Content-type': 'application/json; charset=UTF-8' 
  },
 }
 
 fetch('https://jsonplaceholder.typicode.com/users/1/todos/1', deleteMethod) 
 .then(response => response.json())
 .then(data => console.log(data)) 
 .catch(err => console.log(err)) 


//////////////////Deleting a note - second option
 fetch('https://jsonplaceholder.typicode.com/users/1/todos/1',{
    method:'DELETE'
}).then(response=>{
    return response.json()
}).then(data=> 
console.log(data)
);

//////////////////Data loading status
async function getLoading() {
let response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');

const reader = response.body.getReader();

const contentLength = +response.headers.get('Content-Length');

let receivedLength = 0; 
let chunks = []; 
while(true) {
  const {done, value} = await reader.read();

  if (done) {
    break;
  }

  chunks.push(value);
  receivedLength += value.length;

  console.log(`Received ${receivedLength} out of ${contentLength}`)
}

let chunksAll = new Uint8Array(receivedLength); 
let position = 0;
for(let chunk of chunks) {
  chunksAll.set(chunk, position); 
  position += chunk.length;
}

let result = new TextDecoder("utf-8").decode(chunksAll);

let commits = JSON.parse(result);
console.log(commits[0].note);
}
getLoading()