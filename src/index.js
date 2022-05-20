import react from "react";
import ReactDOM from "react-dom";

class App extends react.Component {
  render() {
    return (
      <div>
        <HelloInDiv />
      </div>
    );
  }
}
class HelloInDiv extends react.Component {
  render() {
    return <h1>Hello!</h1>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
