import useSWR from "swr";

const fetcher = async (url) => fetch(url).then((response) => response.json())

export function useGithubUser({username}) {

    const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher);

    return (
        {
            user: data,
            isLoading: !data && !error,
            error: error,
        }
    )
}