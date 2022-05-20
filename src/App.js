import { useEffect, useState } from "react";

export function App() {
  return <GitHubUser username={"AntonioTcs"} />;
}

function GitHubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [username]);

  return (
    <div>
      <h1>{`User: ${data.name} `}</h1>
      <h3>{`Bio: ${data.bio} `}</h3>
    </div>
  );
}
