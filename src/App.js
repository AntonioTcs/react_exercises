import { useGithubUser } from "./useGithubUser";

export function App() {
  return <GithubUser username="AntonioTcs" />;
}

function GithubUser({ username }) {
  const { result } = useGithubUser(username);

  return (
    <div>
      {!result && <h1>Loading...</h1>}
      {result && (
        <div>
          <h1>User: {result.name}</h1> <h2>Bio: {result.bio}</h2>
        </div>
      )}
    </div>
  );
}
