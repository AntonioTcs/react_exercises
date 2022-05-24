import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="John" />} />

      <Route path="users:username" element={<ShowGitHubUser />} />

      <Route path="counter" element={<Counter />} />
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
