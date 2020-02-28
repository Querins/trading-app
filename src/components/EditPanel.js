import { addUser, editUser } from '../actions/actions';
import React from 'react';
import { connect } from 'react-redux';
import '../styles/EditPanel.css'

class EditPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    makeLogin(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    addUser(user) {
        fetch('http://localhost:8080/users/', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            debugger;
            user.id = data.id;
            this.props.dispatch(addUser(user))
        });
    }

    editUser(user) {
        fetch('http://localhost:8080/users/', {
            method: 'put',
            body: JSON.stringify(user)
        }).then(this.props.dispatch(editUser(user)))
    }

    handleClick(e) {
        e.preventDefault();
        if(e.target.name === "edit") {
            this.editUser({
                ...this.props.selectedUser,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            });
        } else {
            this.addUser({
                login: this.makeLogin(5),
                firstName: this.state.firstName,
                lastName: this.state.lastName
            });
        }
    }

    render() {
        
        const {
            selectedUser
        } = this.props;

        return (
            <div>
                <h1>{`${selectedUser == null ? "Add" : "Edit"} User`}</h1>
                <form onSubmit={this.handleClick}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstName" placeholder="Your name.." value={this.state.firstName} onChange={this.handleChange.bind(this)}/>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastName" placeholder="Your last name.." value={this.state.lastName} onChange={this.handleChange.bind(this)}/>

                    {selectedUser && <button name="edit" onClick={this.handleClick} type="button">Edit User</button>}
                    <button name="create" onClick={this.handleClick} type="button">Create User</button>
                </form>
            </div>
        )
    }

}

const mapStatetoProps = state => {
    return {
       selectedUser: state.selectedUser 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: user => dispatch(addUser(user)),
        editUser: user => dispatch(editUser(user)),
        dispatch 
    }

}

export default connect(mapStatetoProps, mapDispatchToProps)(EditPanel);