import { useEffect, useState } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";

export function App() {
  return (
    <>
      <Link to="/">Welcome</Link> ||
      <Link to="/users">Fetch User</Link> ||
      <Link to="/counter">One click game</Link>
      <Routes>
        <Route path="/" element={<Welcome name="John" />} />
        <Route path="users" element={<ShowGitHubUser />}>
          <Route path=":username" element={<ShowGitHubUser />} />
        </Route>
        <Route path="counter" element={<Counter />} />
      </Routes>
    </>
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
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (username) {
      setRender(true);
    }
  }, [username]);

  return (
    <div>
      {render ? (
        <GitHubUser username={username} />
      ) : (
        <p>Insert user in the path</p>
      )}
    </div>
  );
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
  }, [username]);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {data && !error && (
        <div>
          <h1>User: {data.name}</h1>{" "}
          <h2>Bio: {data.bio ? data.bio : "Bio not found"}</h2>
        </div>
      )}
      {error && (
        <h1>
          There was an error during the request. Make sure you wrote the right
          username
        </h1>
      )}
    </div>
  );
}

export function Counter() {
  const [counter, setCounter] = useState(0);

  function clickEventHandler() {
    setCounter((counter) => counter + 1);
  }

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={clickEventHandler}>Click!</button>
    </div>
  );
}
