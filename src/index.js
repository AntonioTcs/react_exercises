import react from "react";
import ReactDOM from "react-dom";

class Hello extends react.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>What a beautiful day!</p>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.querySelector("#root"));
