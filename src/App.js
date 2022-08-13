import './index.css';
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { useState } from 'react';
import { NotFound } from './NotFound';

export function App() {

    const [username, setUsername] = useState();

    function setUserPath(event) {

        let userPath = event.target.value;

        setUsername(userPath);

        console.log(username);
    };

    return (
        <div className="welcome p-6 m-4">
            <div>
                <h1 className="text-2xl font-semibold mb-4">Single-Page Application</h1>
                <hr className="border-2 border-red-500 mb-4" />
                <Link className='text-lg font-semibold underline text-cyan-500 mr-3' to='/'>Home</Link>
                <Link className='text-lg font-semibold underline text-cyan-500 mr-3' to='counter'>Counter</Link>
                <span className="border-2 border-red-500 w-fit p-2">
                    <input className='mr-3' type="text" onChange={setUserPath} /><Link className='text-lg font-semibold underline text-cyan-500 mr-3' to={`users/${username}`}><span>Go to User Page</span></Link>
                </span>
                <hr className="border-2 border-red-500 mt-4 mb-4" />
            </div>
            <Routes>
                <Route path='/' element={<Welcome name={'Franco'} />} />
                <Route path='counter' element={<Counter initialValue={0} increaseValue={1} interval={1000} />} />
                <Route path='users/:username' element={<ShowGithubUser />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

// In order to pass a JSX expression as a prop, you need to embed it in curly braces "{}", as done above.