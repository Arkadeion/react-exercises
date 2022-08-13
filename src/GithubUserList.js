import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList(props) {

    const [users] = useState(['Arkadeion', 'Develhope', 'mirkoRainer'])

    /*     function addNewUser(event) {
    
            let newUser = event.target.previousSibling.value;
    
            setUsers([
                ...users,
                newUser,
            ])
    
            event.target.previousSibling.value = '';
    
        } */

    return (

        <div className="bg-white rounded-xl border border-red-700 p-8 w-1/5">

            <hr className="border-2 border-red-500 mt-4 mb-4" />
            {/*             <input className="border-black border-2 mr-3" name="newUser" />
            <button className="rounded-xl border-black border-2 p-1 mr-3" onClick={addNewUser} >Add Item</button> */}
            <div>
                {users.map((user, index) => <div className="text-xl text-blue-500 font-semibold mb-4" id={index} key={index} ><Link to={`/users/${user}`} username={user}>{user}</Link></div>)}
            </div>

            <hr className="border-2 border-red-500 mt-4 mb-4" />

            <Outlet />

        </div>

    )

}