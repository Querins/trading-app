import {
  FETCH_USERS,
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
} from '../actions/actions';
import {initialState} from '../index';

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ACCOUNTS: return {
            ...state,
            accounts: fetch("http://localhost:8080/accounts")
                        .then(response => response.json())
        }

        case DELETE_USER: 
          return state.users.filter(user => user.id != action.userId);
        
        case ADD_USER: 
          return {
              
          }

        case EDIT_USER: 
          
        
    }
};

function fetchUsers() {
  return fetch('http://localhost:8080/users')
    .then(res => res.json())
    .then(json => this.setState({ clients: json }));
}
