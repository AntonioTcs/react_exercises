import { ClickCounter } from "./App";
import ReactDOM from "react-dom";

let rootElement = document.querySelector("#root");

ReactDOM.render(<ClickCounter initialValue={0} />, rootElement);
