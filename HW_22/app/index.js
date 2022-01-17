let arrPosts = []
getAllPosts()

function addNew(item) {
    const li = document.createElement('li')
    li.innerText = (arrPosts.indexOf(item) + 1) + ": " + item.title
    if(item.fakeId) {
        li.setAttribute('data_id', item.fakeId)
    } else {
        li.setAttribute('data_id', item.id)
    }
    const buttonDelete = document.createElement('button')
    buttonDelete.setAttribute('class', 'button_delete')
    buttonDelete.innerText = 'Delete'
    buttonDelete.addEventListener('click', () => {
        deleteElem(item.id, item.fakeId)})
    li.append(buttonDelete)
    document.querySelector('.notes').append(li)
}

function getAllPosts() {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then(res => res.json())
        .then(res => {
            arrPosts = res
            arrPosts.forEach(item => addNew(item))
        })
}

const deleteElem = async function (id, fakeId) {
    fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
        method: 'DELETE',
    })
    .then(res => console.log(res.status))
    .then(()=> {
        if(fakeId) {
            arrPosts = arrPosts.filter(item=> item.fakeId !== fakeId)
            console.log(arrPosts)
            //document.querySelector('li[data_id="' + fakeId + '"]').remove()
            document.querySelector('.notes').innerHTML = ''
            arrPosts.forEach(item => addNew(item))
            return
        }

        arrPosts = arrPosts.filter(item=> item.id !== id)
        console.log(arrPosts)
        //document.querySelector('li[data_id="' + id + '"]').remove()
        document.querySelector('.notes').innerHTML = ''
        arrPosts.forEach(item => addNew(item))
    })

}

const newFetch = async function () {
    let responce = await fetch('https://jsonplaceholder.typicode.com/users/1/todos', {
        method: 'POST',
        headers: new Headers({
            'Content-type': 'application/json; charset=UTF-8'
        }),
        body: JSON.stringify({
            title: document.forms[0].elements.text.value,
            fakeId: new Date().valueOf(),
            completed: false
        })
    })

    let responseItem = await responce.json()
    console.log(responseItem)
    arrPosts.push(responseItem)
    addNew(responseItem)
}

const submit = document.forms[0].elements.submitForm
submit.addEventListener('click', () => {
    newFetch()
    document.forms[0].elements.text.value = ''
})


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

let notes = JSON.parse(result);
console.log(notes[0].note);
}
getLoading()