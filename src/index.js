import { Colors } from "./App";
import reactDOM from "react-dom";

const rootElement = document.getElementById("root");
const colors = [
  { id: 0, name: "Blue" },
  { id: 1, name: "Red" },
  { id: 2, name: "Yellow" },
  { id: 3, name: "Pink" },
  { id: 4, name: "Violet" },
];

reactDOM.render(<Colors colorsArray={colors} />, rootElement);
