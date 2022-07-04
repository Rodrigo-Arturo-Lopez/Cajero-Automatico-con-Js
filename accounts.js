if (!localStorage.getItem('accounts')) localStorage.setItem('accounts', JSON.stringify([
    { 
        name: 'Maria',
        password: 12345,
        balance: 200
    },
    { 
        name: 'Rodrigo',
        password: 99999,
        balance: 290
    },
    { 
        name: 'Blacko',
        password: 44444,
        balance: 67
    }
]));