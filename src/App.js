import { useState } from "react";

export function App() {
  function onLogin(data) {
    console.log(data);
  }
  return (
    <div>
      <Login onLogin={onLogin} />
    </div>
  );
}

function Login({ onLogin }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function inputChangeHandler(event) {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const check = event.target.checked;

    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? check : value,
    }));
  }

  function buttonClickHandler() {
    onLogin(data);
  }

  function Button({ btnDisable = true }) {
    return (
      <button disabled={btnDisable} onClick={buttonClickHandler}>
        Login
      </button>
    );
  }
  return (
    <div>
      <input
        name="username"
        value={data.username}
        onChange={inputChangeHandler}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={inputChangeHandler}
      />
      <input
        name="remember"
        type="checkbox"
        checked={data.remember}
        onChange={inputChangeHandler}
      />

      <Button btnDisable={!(data.username.length && data.password.length)} />
    </div>
  );
}
