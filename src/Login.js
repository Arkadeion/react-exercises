import React from "react";

export class Login extends React.Component {

    state = {
        username: '',
        password: '',
        checkbox: 'false',
        loginButton: 'disabled'
    }

    handleInput = (event) => {

        let inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        let name = event.target.name;

        this.setState({
            [name]: inputValue
        })
    }

    render() {
        return (
            <div>
                <input name="username" value={this.state.username} onChange={this.handleInput} />
                <input name="password" type='password' value={this.state.password} onChange={this.handleInput} />
                <input name="checkbox" type='checkbox' value={this.state.checkbox} onChange={this.handleInput} />
                <button name="submit" type='submit' disabled={!this.state.username || !this.state.password} onClick={this.props._onLogin}>Login</button>
            </div>
        )
    }
}