import { useEffect, useState } from "react";

export function App() {
  const [userList, addUser] = useState([]);
  const [user, updateUser] = useState("");

  function updateInput(event) {
    const value = event.target.value;
    updateUser(value);
  }

  return (
    <div>
      <input value={user} onChange={updateInput} />
      {/* <button type="button" onClick={} /> */}
      <GitHubUserList userList={userList} />;
    </div>
  );
}
function fetchUser({ username }) {
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

function GitHubUserList(userList) {
  const [data, setData] = useState(null);

  useEffect(() => {
    userList.foreach((username) => {
      const user = fetchUser(data.username);
      setData((data) => data.push(user));
      console.log(data);
    });
  }, [data, userList]);

  return <GitHubUser userFetchedArray={data} />;
}

function GitHubUser(userFetchedArray) {
  return (
    <div>
      {userFetchedArray.map((user) => {
        <div>
          <h1>{`User: ${user.name}`}</h1>
        </div>;
      })}
    </div>
  );
}
