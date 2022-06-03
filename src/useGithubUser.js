import useSWR from "swr";

export function useGithubUser(username) {
  const url = `https://api.github.com/${username}`;
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, error } = useSWR(() => (username ? url : null), fetcher);

  return { result: data, error };
}
