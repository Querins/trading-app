import React from 'react';

export default class AccountInfo extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Account ID</td>
            <td>Balance</td>
          </tr>
        </thead>
        <tbody>
          {this.props.accounts.map(account => (
            <tr>
              <td>{account.id}</td>
              <td>{account.balance + account.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
