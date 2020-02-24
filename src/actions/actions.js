export const ADD_USERS = 'ADD_USERS';
export const ADD_ACCOUNTS = 'ADD_ACCOUNTS';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';

export function addUsers(users) {
    return {
        type: ADD_USERS,
        users
    }
}

export function addUser(user) {
    return {
        type: ADD_USERS,
        user
    }
}

export function deleteUser(id) {
    return {
        type: ADD_USERS,
        id
    }
}

export function editUser(newUser) {
    return {
        type: ADD_USERS,
        user: newUser
    }
}

export function addAccouns(userId, accounts) {
    return {
        type: ADD_USERS,
        id: userId,
        accounts
    }
}