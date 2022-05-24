import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function fetcher() {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(true);
          return null;
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }

  useEffect(() => {
    setError(false);
    setLoading(true);
    fetcher();
  }, []);

  return { result: data, fetcher, isLoading, error };
}
