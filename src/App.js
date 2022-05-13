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
        <h1>Count: {this.state.count}</h1>
        <CounterButton func={this.clickEventHandler} />
      </div>
    );
  }
}

class CounterButton extends react.Component {
  render() {
    return (
      <div>
        {/* <h1>Count: {ClickCounter.state.count} </h1> */}
        <button onClick={this.func}>Click!</button>
      </div>
    );
  }
}
