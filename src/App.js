import react from "react";

export class App extends react.Component {
  onLogin = (state) => {
    console.log(state);
  };
  render() {
    return <Login onLogin={this.onLogin} />;
  }
}
class Login extends react.Component {
  state = {
    login: {
      username: "",
      password: "",
      remember: false,
    },
    bntEnable: true,
  };

  inputChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const check = event.target.checked;

    this.setState((prevState) => ({
      ...prevState,
      login: {
        ...prevState.login,
        [name]: type === "checkbox" ? check : value,
      },
    }));

    if (this.state.login.username && this.state.login.password) {
      this.setState({
        bntEnable: false,
      });
    }
  };

  buttonClickHandler = () => {
    this.props.onLogin(this.state.login);
  };

  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.login.username}
          onChange={this.inputChangeHandler}
        />
        <input
          name="password"
          type="password"
          value={this.state.login.password}
          onChange={this.inputChangeHandler}
        />
        <input
          name="remember"
          type="checkbox"
          checked={this.state.login.remember}
          onChange={this.inputChangeHandler}
        />

        <button
          disabled={this.state.login.bntEnable}
          onClick={this.buttonClickHandler}
        >
          Login
        </button>
      </div>
    );
  }
}
