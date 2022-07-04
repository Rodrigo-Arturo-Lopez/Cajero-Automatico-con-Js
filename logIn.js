const accounts = JSON.parse(localStorage.getItem('accounts'));

const user = document.getElementById('user');
const password = document.getElementById('password');
const message = document.getElementById('message');
const form = document.getElementById('myForm');
let userOnline;

function login(){
    var userFind = 0;
    for (let i = 0; i < accounts.length; i++) {
        if(user.value == accounts[i].name){
            userFind = 1;
            if (password.value == accounts[i].password) {
                location ='logIn.html';
                userOnline = accounts[i];
                localStorage.setItem('user', JSON.stringify(userOnline));
            }
            else{
                message.hidden = false;
            }
        }
        else if (i == accounts.length - 1){
            if (userFind != 1){
                message.hidden = false;
            }
        }
    }
}

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener("submit", handleForm);

window.onload = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) location = 'mainMenu.html';
}
