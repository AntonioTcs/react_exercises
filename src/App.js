import { useEffect, useState } from "react";

export function App() {
  const [user, updateUser] = useState("");
  const [userList, updateUserList] = useState([]);
  const [render, setRender] = useState(false);

  function updateInput(event) {
    const value = event.target.value;
    updateUser(value);
  }

  function updateList() {
    setRender(true);
    updateUserList([...userList, user]);
    updateUser("");
    setTimeout(() => setRender(false), 1);
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

async function fetchData(username) {
  const userFetched = await fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => data);

  return await userFetched;
}

function GitHubUserList({ userList }) {
  const [fetchedData, setFetchedData] = useState(null);
  const lastUser = userList[userList.length - 1];

  useEffect(() => {
    async function waitFetch() {
      const fetchedUser = lastUser
        ? await fetchData(lastUser)
        : "User must be over 2 char";
      console.log(fetchedUser);
      setFetchedData(fetchedUser);
      console.log(fetchedData);
    }

    waitFetch();
  }, [lastUser, fetchedData]);

  return <div>{/* <GitHubUser userFetchedArray={data} /> */}</div>;
}
/* 
function GitHubUser(userFetchedArray) {
  return (
    <div>
      {userFetchedArray.map((user) => (
        <div>
          <h1>{`User: ${user.name}`}</h1>
        </div>
      ))}
    </div>
  );
} */
