import React from "react";

export class Login extends React.Component {

    state = {
        username: '',
        password: '',
        checkbox: 'false'
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
                <input name="username" value={this.state.value} onChange={this.handleInput} />
                <input name="password" type='password' value={this.state.value} onChange={this.handleInput} />
                <input name="checkbox" type='checkbox' value={this.state.value} onChange={this.handleInput} />
            </div>
        )
    }
}