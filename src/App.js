import react from "react";

export class UncontrolledLogin extends react.Component {
  SubmitEvent = (event) => {
    event.preventDefault();

    const user = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
  };

  render() {
    return (
      <form onSubmit={this.SubmitEvent}>
        <input name="username" />
        <input name="password" type="password" />
        <input name="remember" type="checkbox" />

        <button>Login</button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}
