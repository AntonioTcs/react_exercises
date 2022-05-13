import react from "react";

export class Login extends react.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  ChangeEventHandler = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const check = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? check : value,
    });
  };

  btnClickHandler = () => {
    console.log(this.state);
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={this.ChangeEventHandler}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.ChangeEventHandler}
        />
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.ChangeEventHandler}
        />

        <button onClick={this.btnClickHandler}>Reset</button>
      </div>
    );
  }
}
