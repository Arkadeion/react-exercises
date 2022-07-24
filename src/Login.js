import React from "react";

export class Login extends React.Component {

    state = {
        username: '',
        password: '',
        remember: false,
        loginButton: 'disabled'
    }

    handleInput = (event) => {

        let inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        let name = event.target.name;

        this.setState({
            [name]: inputValue
        })
    }

    getFormData = (event) => {

        event.preventDefault();
        this.props._onLogin(this.state);

    }

    render() {
        return (
            <div>
                <input name="username" value={this.state.username} onChange={this.handleInput} />
                <input name="password" type='password' value={this.state.password} onChange={this.handleInput} />
                <input name="remember" type='checkbox' value={this.state.remember} onChange={this.handleInput} />
                <button name="submit" type='submit' disabled={!this.state.username || !this.state.password} onClick={this.getFormData}>Login</button>
            </div>
        )
    }
}