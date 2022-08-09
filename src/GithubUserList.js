import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList(props) {

    const [users, setUsers] = useState(['Arkadeion', 'Develhope', 'mirkoRainer'])

    function addNewUser(event) {

        let newUser = event.target.previousSibling.value;

        setUsers([
            ...users,
            newUser,
        ])

        event.target.previousSibling.value = '';

    }

    return (

        <div className="bg-white rounded-xl border border-red-700 p-8 max-w-fit">
            <input className="border-black border-2 mr-3" name="newUser" />
            <button className="rounded-xl border-black border-2 p-1 mr-3" onClick={addNewUser} >Add Item</button>
            <div>
                {users.map((user, index) => <div className="text-xl font-semibold mb-4" id={index} key={index} ><GithubUser username={user} /></div>)}
            </div>
        </div>

    )

}