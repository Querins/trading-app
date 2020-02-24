import {
  ADD_USERS,
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  ADD_ACCOUNTS
} from '../actions/actions';
import {
  initialState
} from '../index';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNTS:
      return {
        ...state,
        accounts: action.acounts
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

      default:
        return state;

  }
};