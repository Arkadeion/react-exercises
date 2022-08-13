import './index.css';
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { NotFound } from './NotFound';
import { GithubUserList } from './GithubUserList';
import { GithubUser } from './GithubUser';
import { useState } from 'react';
import { AddUser } from './AddUser';

export function App() {

    const [userlist, setUserlist] = useState(['Arkadeion', 'Develhope', 'mirkoRainer'])

    return (
        <div className="welcome p-6 m-4">
            <div>
                <h1 className="text-2xl font-semibold mb-4">Single-Page Application</h1>
                <hr className="border-2 border-red-600 mb-4" />
                <Link className='text-lg font-semibold underline text-cyan-500 mr-3' to='/'>Home</Link>
                <Link className='text-lg font-semibold underline text-cyan-500 mr-3' to='counter'>Counter</Link>
                <Link className='text-lg font-semibold underline text-cyan-500 mr-3' to='users' >Users</Link>
                <hr className="border-2 border-red-600 mt-4 mb-4" />
            </div>
            <Routes>
                <Route path='/' element={<Welcome name={'Franco'} />} />
                <Route path='counter' element={<Counter initialValue={0} increaseValue={1} interval={1000} />} />
                <Route path='users' element={<GithubUserList userlist={userlist} />}>
                    <Route path=':username' element={<GithubUser />} />
                    <Route index element={<AddUser userlist={userlist} setUserlist={setUserlist} />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

// In order to pass a JSX expression as a prop, you need to embed it in curly braces "{}", as done above.