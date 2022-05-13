import react from "react";

export class ClickCounter extends react.Component {
  state = {
    count: this.props.initialValue,
  };

  clickEventHandler = (event) => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.count > 3 ? "blue" : "red" }}>
          Count: {this.state.count}
        </h1>
        <button onClick={this.clickEventHandler}>Click!</button>
      </div>
    );
  }
}
