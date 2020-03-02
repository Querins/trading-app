import {
  ADD_USERS,
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  SELECT_USER,
  ADD_ACCOUNTS,
  ADD_CURRENCIES
} from '../actions/actions';
import {
  initialState
} from '../index';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNTS:
      return {
        ...state,
        accounts: action.accounts
      }

      case ADD_USERS: {
        return {
          ...state,
          users: action.users
        }
      }

      case DELETE_USER: {
        return {
          ...state,
          selectedUser: null,
          users: state.users.filter(user => user.id !== action.id)
        }
      }

      case ADD_USER: {
        return {
          ...state,
          selectedUser: null,
          users: [
            ...state.users,
            action.user
          ]
        }
      }

      case EDIT_USER: {
        return {
          ...state,
          users: state.users.map(user => {
            if(user.id !== action.user.id) {
              return user;
            }
            return {
              ...user,
              ...action.user
            }
          })
        }
      }

      case ADD_CURRENCIES: {
        return {
          ...state,
          currencies: action.currencies
        }
      }

      case SELECT_USER: {
        return {
          ...state,
          selectedUser: action.user
        }
      }

      default:
        return state;

  }
};