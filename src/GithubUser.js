import { useParams } from "react-router-dom"
import { useGithubUser } from "./useGithubUser"

export function GithubUser() {

    const { username } = useParams();

    const { user, isLoading, error, handleDataRefresh } = useGithubUser({ username })

    return (
        <div>
            <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8">
                {isLoading && <h1 className="text-xl font-bold" >Loading...</h1>}
                {error && <h1 className="text-xl font-bold" >{error.message}</h1>}
                {!error && user && <h1 className="text-xl font-bold" >{user.name !== null ? user.name : `${user.login} has not set a name.`}</h1>}
            </div>
            <button className="rounded-xl border-black border-2 p-1 mr-3" onClick={handleDataRefresh} >Refresh User Data</button>
        </div>
    )
}