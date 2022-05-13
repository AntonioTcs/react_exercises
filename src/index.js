import { Colors } from "./App";
import reactDOM from "react-dom";

const rootElement = document.getElementById("root");
const colors = ["Blue", "Red", "Yellow", "Pink", "Violet"];

reactDOM.render(<Colors colorsArray={colors} />, rootElement);
