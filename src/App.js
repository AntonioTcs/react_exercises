import { useEffect, useState } from "react";

export function App() {
  return <GitHubUser username={"AntonioTcs"} />;
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
