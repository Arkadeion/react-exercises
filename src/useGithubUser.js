import { useEffect, useState } from "react";

export function useGithubUser({username}) {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    async function fetchUser(username) {

        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        const json = await response.json();

        if (response.status === 403) {
            setError(new Error("You are being rate-limited by the Github API."));
        } else if (response.status !== 200) {
            setError(new Error("User not found."));
        }

        setLoading(false);
        setUser(json);
    }

    useEffect(() => {
        fetchUser(username)
    }, [username]);

    return (
        {
            user: user,
            loading: loading,
            error: error,
        }
    )
}