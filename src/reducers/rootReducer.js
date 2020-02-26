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
      debugger;
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

      case DELETE_USER:
        return state.users.filter(user => user.id !== action.userId);

      case ADD_USER: {
        state.users.push(action.user);
        return state;
      }

      case ADD_CURRENCIES: {
        state.currencies.push(action.currencies);
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