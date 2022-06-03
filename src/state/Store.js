import { combineReducers, createStore } from "redux";
import { counterReducer } from "./Counter";
import { todosReducer } from "./Todos";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todosReducer,
});
export const store = createStore(rootReducer);
