import React from 'react';
import ClientsTable from './ClientsTable'

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <ClientsTable />
      </div>
    );
  }
}

export default App;
