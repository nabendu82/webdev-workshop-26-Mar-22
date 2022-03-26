const myForm = document.querySelector('.my-form');
const nameInput = document.querySelector('#name');
const passInput = document.querySelector('#password');
const msgInput = document.querySelector('#message');
const userList = document.querySelector('#users');

//Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    const li = document.createElement('li');
    const textNode = document.createTextNode(`${nameInput.value} : ${passInput.value} : ${msgInput.value}`);
    li.appendChild(textNode);
    userList.appendChild(li);
    //Clear Fields
    nameInput.value = '';
    passInput.value = '';
    msgInput.value = '';
}