import { App } from "./App";
import ReactDOM from "react-dom";
import { store } from "./state/Store";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./state/Counter";

let rootElement = document.querySelector("#root");

ReactDOM.render(<App />, rootElement);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementCounter(5));
store.dispatch(incrementCounter(5));
store.dispatch(incrementCounter(5));
store.dispatch(decrementCounter(5));
store.dispatch(resetCounter());
