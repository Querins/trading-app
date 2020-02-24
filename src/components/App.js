import React from 'react';
import ClientsTable from './ClientsTable';
import AccountTable from './AccountTable';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <ClientsTable />
        <AccountTable />
      </div>
    );
  }
}

export default App;
