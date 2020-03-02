import React from 'react';
import { connect } from 'react-redux';
import { addUsers, selectUser, deleteUser } from '../actions/actions'
import '../styles/ClientsTable.css'

class ClientsTable extends React.Component {

  componentDidMount() {
      fetch('http://localhost:8080/users')
      .then(resp => resp.json())
      .then(users => this.props.dispatch(addUsers(users)));
  }

  render() {

    const {
      selectUser,
      selectedUser,
      deleteUser,
      users
    } = this.props;

    return (
      <div>
              <table>
        <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Login</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        </thead>
        <tbody>
        {
          users.map(user => (
            <tr key={user.id} onClick = {selectUser.bind(this, user)} className = {selectedUser && user.id === selectedUser.id ? "selected" : ""} tabIndex={0}>
              <td><button className={"deleteBtn"} onClick={deleteUser.bind(this, user)}>DELETE</button></td>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>))
        }
        </tbody>
      </table>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser,
    users: state.users  
  }
}

const mapDispatchToProps = dispatch => {

  return {
    selectUser: user => dispatch(selectUser(user)),
    deleteUser: user => {
      fetch(`http://localhost:8080/users/${user.id}`, {
        method: 'delete'
      })
      .then(dispatch(deleteUser(user.id)))
    },
    dispatch
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsTable);