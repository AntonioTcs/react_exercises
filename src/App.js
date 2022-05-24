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
        <Route path="users:username" element={<ShowGitHubUser />} />
        <Route path="users" element={<ShowGitHubUser />} />
        <Route path="counter" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
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
function NotFound() {
  return (
    <div>
      <h1>Sorry path not found</h1>
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
  }, []);

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

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [username]);

  return (
    <div>
      <h1>{`User: ${data.name} `}</h1>
      <h3>{`Bio: ${data.bio} `}</h3>
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
