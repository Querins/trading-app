export function requestAddUser(user) {
    debugger;
    return fetch('http://localhost:8080/users/', {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json());
}

export function fetchUsers() {
    return fetch('http://localhost:8080/users')
           .then(resp => resp.json());
}

export function fetchCurrencies() {
    return fetch('http://localhost:8080/currencies')
    .then(resp => resp.json());
}

export function fetchAccounts() {
    return fetch('http://localhost:8080/accounts')
    .then(resp => resp.json());
}

export function requestUserDelete(user) {
    return fetch(`http://localhost:8080/users/${user.id}`, {
        method: 'delete'
    });
}

export function requestEditUser(user) {
    return fetch(`http://localhost:8080/users/${user.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: user.firstName,
            lastName: user.lastName
        })
    })
}
