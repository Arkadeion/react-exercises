import React from "react";

export class Login extends React.Component {

    state = {
        username: '',
        password: '',
        checkbox: false,
        loginButton: 'disabled'
    }

    handleInput = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        let type = event.target.type;
        let checked = event.target.checked;

        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    handleResetForm = () => {
        this.setState({
            username: '',
            password: '',
            checkbox: false
        })
    }

    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <input name="username" value={this.state.username} onChange={this.handleInput} />
                <input name="password" type='password' value={this.state.password} onChange={this.handleInput} />
                <input name="checkbox" type='checkbox' checked={this.state.checkbox} onChange={this.handleInput} />
                <button name="submit" type='submit' disabled={!this.state.username || !this.state.password} onClick={this.props._onLogin}>Login</button>
                <button onClick={this.handleResetForm} >Reset</button>
            </div>
        )
    }
}