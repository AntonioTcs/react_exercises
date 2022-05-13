import react from "react";

export class App extends react.Component {
  ButtonClickHandler(props) {
    const actState = {
      username: props.username,
      password: props.password,
      remember: props.checked,
    };
    console.log(actState);
  }
  render() {
    return <Login onLogin={this.ButtonClickHandler} />;
  }
}
class Login extends react.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    bntEnable: true,
  };

  InputChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const check = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? check : value,
    });

    if (this.state.username && this.state.password) {
      this.setState({
        bntEnable: false,
      });
    }
  };

  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={this.InputChangeHandler}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.InputChangeHandler}
        />
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.InputChangeHandler}
        />

        <button
          disabled={this.state.bntEnable}
          onClick={this.props.ButtonClickHandler}
          username={this.state.username}
          password={this.state.password}
          checked={this.state.remember}
        >
          Login
        </button>
      </div>
    );
  }
}
