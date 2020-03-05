import React from 'react';
import { connect } from 'react-redux';
import { addAccounts, addCurrencies } from '../actions/actions'
import { fetchAccounts, fetchCurrencies } from '../services/networkService'

class AccountInfo extends React.Component {
  
  componentDidMount() {
    
    fetchAccounts()
    .then(accounts => this.props.dispatch(addAccounts(accounts)));

    fetchCurrencies()
    .then(currencies => this.props.dispatch(addCurrencies(currencies)));
  }
  
  render() {

    return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Balance</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>          
            {this.props.selectedUser && 
              this.props.accounts
              .filter(account => account.ownerId === this.props.selectedUser.id)
              .map(account => (
                <tr key={account.id}>
                  <td>{account.id}</td>
                  <td>{account.balance}</td>
                  <td>{account.currency}</td>
                </tr>
              ))
            }
        </tbody>
      </table>

    </div>)
  }
}

const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser,
    accounts: state.accounts,
    currencies: state.currencies
  }
}

export default connect(mapStateToProps)(AccountInfo);