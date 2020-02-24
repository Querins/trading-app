import React from 'react';
import '../styles/ClientsTable.css';
import {addUsers} from '../actions/actions';
import { connect } from 'react-redux';
class ClientsTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
      fetch('http://locahost:8080/users')
      .then(resp => resp.json())
      .then(users => this.props.dispatch(addUsers(users)));
  }

  render() {
    return (
      <table>
        <tr>
          <th>ID</th>
          <th>First name</th>
          <th>Last Name</th>
        </tr>
        {
          this.props.users.map(user => (
          <tr>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
          </tr>))
        }
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users  
  }
}

export default connect(mapStateToProps)(ClientsTable);