export const ADD_USERS = 'ADD_USERS';
export const ADD_ACCOUNTS = 'ADD_ACCOUNTS';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';
export const SELECT_USER = 'SELECT_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export function addUsers(users) {
    return {
        type: ADD_USERS,
        users
    }
}

export function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        id
    }
}

export function editUser(newUser) {
    return {
        type: EDIT_USER,
        user: newUser
    }
}

export function addAccounts(accounts) {
    return {
        type: ADD_ACCOUNTS,
        accounts
    }
}

export function selectUser(user) {
    return {
        type: SELECT_USER,
        user
    }
}

export function addCurrencies(currencies) {
    return {
        type: ADD_CURRENCIES,
        currencies
    }
}