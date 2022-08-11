import { useGithubUser } from "./useGithubUser"

export function GithubUser({ username }) {

    const { user, loading, error } = useGithubUser({username})

    return <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8">
        {loading && <h1 className="text-xl font-bold" >Loading...</h1>}
        {user && <h1 className="text-xl font-bold" >{user.name}</h1>}
        {error && <h1 className="text-xl font-bold" >{error.message}</h1>}
    </div>
}