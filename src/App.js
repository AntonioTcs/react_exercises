import { useEffect, useState } from "react";
import { Routes, Route, useParams, Link, Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <Link to="/">Welcome</Link> ||
      <Link to="/users">Fetch User</Link> ||
      <Link to="/counter">One click game</Link>
      <Routes>
        <Route path="/" element={<Welcome name="John" />} />
        <Route path="users" element={<GitHubUserList />}>
          <Route index={true} element={<h1>Add a user and select it</h1>} />
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
  return (
    <div>
      <GitHubUser username={username} />
    </div>
  );
}

function GitHubUser({ username }) {
  const [fetchedUser, setFetchedUser] = useState([]);

  useEffect(() => {
    if (username != null) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => (response.status === 200 ? response.json() : null))
        .then((json) => {
          if (json) {
            setFetchedUser(json);
          } else {
            alert("User Not Found");
          }
        });
    }
  }, [username]);

  return (
    <div>
      <h1>Name : {fetchedUser.name}</h1>
    </div>
  );
}

function GitHubUserList({ userFetched }) {
  const [array, setArray] = useState([]);
  const [user, setUser] = useState();

  function handleChange(event) {
    const value = event.target.value;
    setUser(value);
  }
  function handleBtnClick() {
    setArray([...array, user]);
  }
  return (
    <div>
      <p>Inserisci Utente:</p>
      <input name="username" value={user} onChange={handleChange} />
      <button onClick={handleBtnClick}>Add user</button>
      <div>
        {array.map((user, index) => (
          <div
            key={index}
            style={{ border: "2px solid red", backgroundColor: "aqua" }}
          >
            <Link to={`${user}`}>{user}</Link>
          </div>
        ))}
        <Outlet />
      </div>
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
