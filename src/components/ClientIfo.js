import React from 'react';
import '../styles/ClientInfo.css';
import AccountInfo from './AccountInfo';
import actions from '../actions/actions';

export default class ClientInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
      this.props.dispatch(actions.fetchUsers());
  }

  handleClick(e) {
    this.setState({
      active: true,
    });
  }

  handleBlur(e) {
    this.setState({
      active: false,
    });
  }

  render() {
    return (
      <>
        
      </>
    );
  }
}
