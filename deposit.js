const amount = document.getElementById('amount');
const amountDeposited = document.getElementById('amountDeposited');
const totalInCount = document.getElementById('totalInCount')
const message = document.getElementById('message')
const user = JSON.parse(localStorage.getItem('user'));
const accounts = JSON.parse(localStorage.getItem('accounts'));

function deposit() {
    amount.focus();
    user.balance = Number(amount.value) + Number(user.balance);
    if(user.balance > 990) {
        alert('No puedes tener más de $990 en tu cuenta');
        user.balance = Number(user.balance) - Number(amount.value);
        amount.value = '';
    } else {
        amountDeposited.textContent = '$ ' + amount.value;
        totalInCount.textContent = '$' + user.balance;
        amount.value = '';
        const classes = message.className.split(' ');
        const classFounded = classes.findIndex(element => element == 'hiddenText');
        classes.splice(classFounded, 1);
        message.className = classes.join(' ');
        localStorage.setItem('user', JSON.stringify(user));
    }
    const userIndex = accounts.findIndex((element) => element.name == user.name);
    accounts[userIndex].balance = user.balance;
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

function logOut() {
    localStorage.removeItem('user');
    location = 'logIn.html';
}

function redirect(route) {
    location = route;
}
