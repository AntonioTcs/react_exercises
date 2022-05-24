import { useGithubUser } from "./useGithubUser";

export function App() {
  return <GithubUser username="AntonioTcs" />;
}

function GithubUser({ username }) {
  const { result, fetcher, isLoading, error } = useGithubUser(username);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {result && !error && (
        <div>
          <h1>User: {result.name}</h1> <h2>Bio: {result.bio}</h2>
        </div>
      )}
      {error && <h1>There was an error during the request</h1>}
    </div>
  );
}
