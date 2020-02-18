import React from 'react'
import './ClientInfo.css'
import AccountInfo from './AccountInfo';

export default class ClientInfo extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            active: false
        }
    }

    componentDidMount() {
        let accounts = fetch(`http://localhost:8080/accounts?ownerId=${this.props.client.id}`)
                        .then(response => response.json())
                        .then(json => {
                            this.setState({accounts: json});
                        });
        this.setState({accounts});
    }

    handleClick(e) {
        this.setState({
            active: true
        });
    }

    handleBlur(e) {
        this.setState({
            active: false
        });
    }

    render() {
        return (
            <>
            <tr onClick={this.handleClick} onBlur={this.handleBlur}>
                <td>{this.props.client.id}</td>
                <td>{this.props.client.name}</td>
            </tr>
            {this.state.active &&
                <AccountInfo accounts={this.state.accounts}/>
            }
            </>
        );
    }
}