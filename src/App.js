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
        <Route path="users" element={<GitHubUserList />}>
          <Route path=":username" element={<ShowGitHubUser />} />
        </Route>
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
  const { username = "AntonioTcs" } = useParams();
  console.log("Hello", username);
  return (
    <div>
      <h1>{username}</h1>
      <GitHubUserList username={username} />
      <h1>Caio</h1>
    </div>
  );
}

function GitHubUserList({ username }) {
  const [fetchedUser, setFetchedUser] = useState([]);

  useEffect(() => {
    console.log("Ciao", username);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => (response.status === 200 ? response.json() : null))
      .then((json) => {
        if (json) {
          setFetchedUser(json);
        }
      });
  }, [username]);

  return (
    <div>
      <h1>Name : {fetchedUser.name}</h1>
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
