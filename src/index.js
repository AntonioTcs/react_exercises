import react from "react";
import ReactDOM from "react-dom";

class HelloInDiv extends react.Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    );
  }
}

ReactDOM.render(<HelloInDiv />, document.querySelector("#root"));
