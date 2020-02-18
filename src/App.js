import React from 'react';
import ClientInfo from './ClientIfo'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { clients: [] }
  }

  componentDidMount() {
    fetch("http://localhost:8080/users")
    .then(res => res.json())
    .then(json => this.setState({clients: json}));
  }

  render() {
    return (
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
        </thead>
        <tbody>
          { this.state.clients.map(client => (
            <ClientInfo client={client}/>
        ) ) }
        </tbody>

      </table>
    );
  }

}

export default App;
