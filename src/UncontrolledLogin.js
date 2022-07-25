import React from "react";

export class UncontrolledLogin extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();

        const loginData = {

            username: event.target.elements.username.value,
            password: event.target.elements.password.value,
            remember: event.target.elements.remember.checked,
        }

        this.props._onLogin(loginData);
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Uncontrolled Form</h1>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input name="username" autoFocus />
                        <input name="password" type='password' />
                        <input name="remember" type='checkbox' />
                        <button name="submit" type='submit' >Login</button>
                        <button type="reset" >Reset</button>
                    </form>
                </div>
            </div>

        )
    }
}