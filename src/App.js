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
        {this.props.age > 18 && <Age age={this.props.age} />}
      </div>
    );
  }
}

class Age extends React.Component {
  render() {
    return <p>Your age is {this.props.age}</p>;
  }
}

export default Greets;
