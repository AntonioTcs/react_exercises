import React from "react";

class Counter extends React.Component {
  state = {
    count: this.props.initialCountValue,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementValue,
        };
      });
    }, this.props.timerValue);
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}

export default Counter;
