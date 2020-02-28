import React from 'react';
import ClientsTable from './ClientsTable';
import AccountTable from './AccountTable';
import EditPanel from './EditPanel';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <ClientsTable />
        <AccountTable />
        <EditPanel />
      </div>
    );
  }
}

export default App;
