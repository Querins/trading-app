export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';

export default {
    fetchUsers: () => {
        type: FETCH_USERS,
        users
    },
    fetchAccounts: () => {
        type: FETCH_ACCOUNTS,
        accounts
    },
    addUser: (user) => {
        type: ADD_USER,
        user
    },
    deleteUser: id => {
        type: DELETE_USER,
        userId: id
    }
}