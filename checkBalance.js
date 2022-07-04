window.onload = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user) location = 'logIn.html';
    document.getElementById('balance').textContent = '' + user.balance;
}

function logOut() {
    localStorage.removeItem('user');
    location = 'logIn.html';
}

function redirect(route) {
    location = route;
}