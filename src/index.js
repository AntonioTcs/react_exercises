import { Sum } from "./App";
import ReactDOM from "react-dom";

let rootElement = document.querySelector("#root");
const array = [1, 5, 6, 8, 7, 4, 5, 3];
ReactDOM.render(<Sum numbers={array} />, rootElement);
