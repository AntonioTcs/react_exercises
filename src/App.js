import React from "react";

class Counter extends React.Component {
  state = {
    count: this.props.initialCountValue,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementValue,
        };
      });
    }, this.props.timerValue);
  }
  render() {
    return <DisplayCounter count={this.state.count} />;
  }
}

class DisplayCounter extends React.Component {
  render() {
    return <h1>Count: {this.props.count}</h1>;
  }
}
export default Counter;
