import React from "react";

class Greets extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome,
          {this.props.name ? (
            <strong> {this.props.name}</strong>
          ) : (
            <strong>Franco</strong>
          )}
        </p>
        <p>Your age is {this.props.age}</p>
      </div>
    );
  }
}

export default Greets;
