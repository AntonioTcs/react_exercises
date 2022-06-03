import { App } from "./App";
import ReactDOM from "react-dom";
import { store } from "./state/Store";
import { addTodos, editTodos, removeTodos } from "./state/Todos";
import { incrementCounter, resetCounter } from "./state/Counter";

let rootElement = document.querySelector("#root");

ReactDOM.render(<App />, rootElement);

store.subscribe(() => {
  console.log("I'm changing state", store.getState());
});

store.dispatch(addTodos({ id: 1, title: "Go to the Gym", completed: false }));
store.dispatch(addTodos({ id: 2, title: "Go to the shop", completed: true }));
store.dispatch(removeTodos(2));
store.dispatch(incrementCounter(2));
store.dispatch(incrementCounter(2));
store.dispatch(resetCounter());
store.dispatch(editTodos(1, { completed: true }));
