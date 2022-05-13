import react from "react";

export class Colors extends react.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.colorsArray.map((color) => (
            <li>{color}</li>
          ))}
        </ul>
      </div>
    );
  }
}
