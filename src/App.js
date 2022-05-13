import react from "react";

export class ClickTracker extends react.Component {
  state = {
    lastClick: "None",
  };

  clickEventHandler = (event) => {
    this.setState((state) => {
      return {
        lastClick: event.target.id,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Button: {this.state.lastClick}</h1>
        <button id="one" onClick={this.clickEventHandler}>
          Click!
        </button>
        <button id="two" onClick={this.clickEventHandler}>
          Click!
        </button>
        <button id="three" onClick={this.clickEventHandler}>
          Click!
        </button>
      </div>
    );
  }
}
