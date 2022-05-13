import React from "react";

class Greets extends React.Component {
  render() {
    return <p>Welcome, {this.props.name ? this.props.name : "Franco"}</p>;
  }
}

export default Greets;
