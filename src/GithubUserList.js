import { Link, Outlet } from "react-router-dom";

export function GithubUserList({userlist}) {

    return (

        <div className="bg-white rounded-xl border border-red-700 p-8 w-2/5">

            <hr className="border-2 border-red-500 mt-4 mb-4" />
            <div>
                {userlist.map((user, index) => <div className="text-xl text-blue-500 font-semibold mb-4" id={index} key={index} ><Link to={`/users/${user}`} username={user}>{user}</Link></div>)}
            </div>

            <hr className="border-2 border-red-500 mt-4 mb-4" />

            <Outlet />

        </div>

    )

}