import react from "react";

export class InteractiveWelcome extends react.Component {
  state = {
    user: "",
  };

  InputChangeHandler = (event) => {
    let userUp = event.target.value;

    this.setState({
      user: userUp,
    });
  };

  render() {
    return (
      <div>
        <Welcome user={this.state.user} />
        <input name="username" onChange={this.InputChangeHandler} />
      </div>
    );
  }
}

class Welcome extends react.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.user}</h1>
      </div>
    );
  }
}
