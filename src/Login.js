/* export class Login extends React.Component {

    state = {
        username: '',
        password: '',
        remember: false,
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
            remember: false
        })
    }

    getFormData = (event) => {

        event.preventDefault();
        this.props._onLogin(this.state);

    }

    render() {
        return (
            <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8">
                <label className="text-lg mr-3">Username:</label>
                <input className="border-black border-2 mr-3" name="username" value={this.state.username} onChange={this.handleInput} />
                <label className="text-lg mr-3">Password:</label>
                <input className="border-black border-2 mr-3" name="password" type='password' value={this.state.password} onChange={this.handleInput} />
                <input className="mr-3" name="remember" type='checkbox' checked={this.state.remember} onChange={this.handleInput} />
                <button name="submit" type='submit' disabled={!this.state.username || !this.state.password} style={{color: 'black'}} className={this.state.password.length < 8 ? 'rounded-xl border-black border-2 p-1 mr-3 login-unavailable' : 'rounded-xl border-black border-2 p-1 mr-3 login-available'} onClick={this.getFormData}>Login</button>
                <button className='rounded-xl border-black border-2 p-1 mr-3' onClick={this.handleResetForm} >Reset</button>
            </div>
        )
    }
} */

import { useEffect, useRef } from "react"
import { useLogin } from "./useLogin"

export function Login({ _onLogin }) {

   const { data, handleInput, getFormData, handleResetForm } = useLogin({ _onLogin })

/*    const focusRef = useRef();

   useEffect(() => {
    focusRef.current.focus()
   }, []) */

    return (
        <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8">
            <label className="text-lg mr-3">Username:</label>
            <input className="border-black border-2 mr-3" name="username" value={data.username} onChange={handleInput} />
            <label className="text-lg mr-3">Password:</label>
            <input className="border-black border-2 mr-3" name="password" type='password' value={data.password} onChange={handleInput} />
            <input className="mr-3" name="remember" type='checkbox' checked={data.remember} onChange={handleInput} />
            <button name="submit" type='submit' disabled={!data.username || !data.password} style={{ color: 'black' }} className={data.password.length < 8 ? 'rounded-xl border-black border-2 p-1 mr-3 login-unavailable' : 'rounded-xl border-black border-2 p-1 mr-3 login-available'} onClick={getFormData}>Login</button>
            <button className='rounded-xl border-black border-2 p-1 mr-3' onClick={handleResetForm} >Reset</button>
        </div>
    )
}