import { useGithubUser } from "./useGithubUser";

export function App() {
  return (
    <div>
      <GithubUserFetched />
    </div>
  );
}

function GithubUserFetched() {
  const { result, error } = useGithubUser("");
  return (
    <div>
      {!result && !error && (
        <h1>Loading... If it takes long make sure you insert username</h1>
      )}
      {result && !error && (
        <div>
          <h1>Name: {result.name}</h1> <h2>Bio: {result.bio}</h2>
        </div>
      )}
      {error && <h1>Sorry there was an eror</h1>}
    </div>
  );
}
