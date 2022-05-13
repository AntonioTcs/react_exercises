import Counter from "./App";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Counter initialCountValue={0} incrementValue={2} timerValue={1000} />,
  document.querySelector("#root")
);
