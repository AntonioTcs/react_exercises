import useSWR from "swr";

export function useGithubUser(username) {
  const url = `https://api.github.com/users/${username}`;
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, error, mutate } = useSWR(
    () => (username ? url : null),
    fetcher
  );

  function handleRefresh() {
    mutate();
  }

  return { result: data, error, refresh: handleRefresh };
}
