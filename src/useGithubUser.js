import useSWR from "swr";

const fetcher = async (url) => fetch(url).then((response) => response.json())

export function useGithubUser({username}) {

    const { data, error, mutate } = useSWR(username !== null ? `https://api.github.com/users/${username}` : null, fetcher);

    function handleDataRefresh() {
        mutate(`https://api.github.com/users/${username}`);
    }

    return (
        {
            user: data,
            isLoading: !data && !error,
            error: error,
            handleDataRefresh: handleDataRefresh,
        }
    )
}