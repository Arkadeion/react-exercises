import { useEffect, useState } from "react"

export function GithubUser({ username }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    async function fetchUser(username) {

        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        const json = await response.json();

        setLoading(false);
        setUser(json);
    }

    useEffect(() => {
        fetchUser(username)
    }, [username]);

/*     useEffect(() => {
        setLoading(true);

        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json()
            })
            .then((json) => {
                setLoading(false);
                setUser(json);
                console.log(json);
            })
    }, [username]); */

    return <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8">
        {loading && <h1 className="text-xl font-bold" >Loading...</h1>}
        {user && <h1 className="text-xl font-bold" >{user.login}</h1>}
    </div>
}