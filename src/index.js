import react from "react";
import ReactDOM from "react-dom";

class Message extends react.Component {
  render() {
    return <p>What a beautiful day!</p>;
  }
}

class Hello extends react.Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <Message />
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.querySelector("#root"));
