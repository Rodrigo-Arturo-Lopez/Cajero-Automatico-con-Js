function consultar (){
    location = 'checkBalance.html';
}

function logOut() {
    localStorage.removeItem('user');
    location = 'logIn.html';
}

window.onload = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user) location = 'logIn.html';
    document.getElementById('welcome').textContent = user.name;
}

function redirect(route) {
    location = route;
}