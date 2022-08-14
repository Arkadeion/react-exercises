import { useParams } from "react-router-dom"
import { useGithubUser } from "./useGithubUser"

export function GithubUser() {

    const { username } = useParams();

    const { user, isLoading, error } = useGithubUser({username})

    return <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8">
        {isLoading && <h1 className="text-xl font-bold" >Loading...</h1>}
        {error && <h1 className="text-xl font-bold" >{error.message}</h1>}
        {!error && user && <h1 className="text-xl font-bold" >{user.name !== null ? user.name : `${user.login} has not set a name.`}</h1>}
    </div>
}