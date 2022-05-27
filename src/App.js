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
          <Route path="AntonioTcs" element={<ShowGitHubUser />} />
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

function ShowGitHubUser({ userList }) {
  return (
    <div>
      {userList.map((user) => (
        <div>
          <h1>Name: {user.name}</h1>
          <h2>Bio: {user.bio}</h2>
        </div>
      ))}
    </div>
  );
}

function GitHubUserList() {
  const [fetchedUser, setFetchedUser] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/`)
      .then((response) => (response.status === 200 ? response.json() : null))
      .then((json) => {
        if (json) {
          setFetchedUser((prevUsers) => [...prevUsers, json]);
        }
      });
  }, []);

  return (
    <div>
      <ShowGitHubUser userList={fetchedUser} />
      <Link to="AntonioTcs">ClickMe!</Link>
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
