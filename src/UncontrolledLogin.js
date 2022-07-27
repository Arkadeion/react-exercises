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
            <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold mb-4">Uncontrolled Form</h1>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <label className="text-lg mr-3">Username:</label>
                        <input className="border-black border-2 mr-3" name="username" />
                        <label className="text-lg mr-3">Password:</label>
                        <input className="border-black border-2 mr-3" name="password" type='password' />
                        <input className="mr-3" name="remember" type='checkbox' />
                        <button className='rounded-xl border-black border-2 p-1 mr-3' name="submit" type='submit' >Login</button>
                        <button className='rounded-xl border-black border-2 p-1 mr-3' type="reset" >Reset</button>
                    </form>
                </div>
            </div>

        )
    }
}