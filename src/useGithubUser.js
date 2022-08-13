import { useEffect, useState } from "react";

export function useGithubUser({username}) {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    async function fetchUser(username) {

        setUser(null);
        setLoading(true);
        setError(null);
        const response = await fetch(`https://api.github.com/users/${username}`);
        const json = await response.json();

        if (response.status === 403) {
            setError(new Error("You are being rate-limited by the Github API."));
        } else if (response.status !== 200) {
            setError(new Error("User not found."));
        }

        setLoading(false);

        if (json.name !== null) {
            setUser(json);
        } else {
            setError(new Error("User doesn't have a name."));
        }

    }

    useEffect(() => {
        fetchUser(username)
    }, [username]);

    return (
        {
            user: user,
            loading: loading,
            error: error,
            fetchUser: fetchUser,
        }
    )
}