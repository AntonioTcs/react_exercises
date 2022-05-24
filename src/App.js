import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="John" />} />
      <Route path="users/:username" element={<ShowGitHubUser />} />
    </Routes>
  );
}

function Welcome({ name = "World" }) {
  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  );
}

function ShowGitHubUser() {
  const { username } = useParams();
  return <GitHubUser username={username} />;
}

function GitHubUser({ username }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);

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
  }, []);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {data && !error && (
        <div>
          <h1>User: {data.name}</h1> <h2>Bio: {data.bio}</h2>
        </div>
      )}
      {error && <h1>There was an error during the request</h1>}
    </div>
  );
}
