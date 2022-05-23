import { useEffect, useState } from "react";

export function App() {
  const [user, updateUser] = useState("");
  const [userList, updateUserList] = useState([]);
  const [render, setRender] = useState(false);

  function updateInput(event) {
    const value = event.target.value.toLowerCase();
    updateUser(value);
  }

  function updateList() {
    setRender(true);
    updateUserList([...userList, user]);
    updateUser("");
  }

  return (
    <div>
      <input value={user} onChange={updateInput} />
      <button type="button" onClick={updateList}>
        Add User
      </button>
      {render && <GitHubUserList userList={userList} />}
    </div>
  );
}

function GitHubUserList({ userList }) {
  const [fetchedUser, setFetchedUser] = useState([]);
  const lastUser =
    userList[userList.length - 1] === userList[userList.length - 2] ||
    userList[userList.length - 1] === ""
      ? null
      : userList[userList.length - 1];

  useEffect(() => {
    if (lastUser != null) {
      fetch(`https://api.github.com/users/${lastUser}`)
        .then((response) => (response.status === 200 ? response.json() : null))
        .then((json) => {
          if (json) {
            setFetchedUser((prevUsers) => [...prevUsers, json]);
          } else {
            alert("User Not Found");
          }
        });
    }
  }, [lastUser]);

  return <div>{<GitHubUser userFetched={fetchedUser} />}</div>;
}

function GitHubUser({ userFetched }) {
  return (
    <div>
      <div>
        {userFetched.map((user, index) => {
          return (
            <div
              key={index}
              style={{ border: "2px solid red", backgroundColor: "aqua" }}
            >
              <h1>User: {user.login}</h1>
              <h1>Name: {user.name}</h1>
              <h2>Bio: {user.bio ? user.bio : "Questo utente non ha bio."}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
