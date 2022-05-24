import { useGithubUser } from "./useGithubUser";

export function App() {
  return <GithubUser username="AntonioTcs" />;
}

function GithubUser({ username }) {
  let { user } = useGithubUser(username);
  console.log(user);
  return (
    <div>
      <h1>User: {user}</h1>
    </div>
  );
}
