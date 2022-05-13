import react from "react";

export class Colors extends react.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.colorsArray.map((color) => (
            <li key={color.id}>{color.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
