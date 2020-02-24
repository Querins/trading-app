import React from 'react';
import '../styles/ClientsTable.css';
import actions from '../actions/actions';

export default class ClientsTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
      this.props.dispatch(actions.fetchUsers());
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Clients Information</h1>
        </div>
        <div className="clientsContainer">
          
        </div>
      </div>
    );
  }
}
