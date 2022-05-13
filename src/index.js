import { ClickTracker } from "./App";
import ReactDOM from "react-dom";

let rootElement = document.querySelector("#root");

ReactDOM.render(<ClickTracker initialValue={0} />, rootElement);
