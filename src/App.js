import react from "react";
import "./main.css";

export class App extends react.Component {
  onLogin = (state) => {
    console.log(state);
  };
  render() {
    return (
      <Container title="App's Title">
        <div>There is some content</div>
      </Container>
    );
  }
}
class Container extends react.Component {
  render() {
    return (
      <div className="bg-red-500 border-2 border-blue-800">
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
