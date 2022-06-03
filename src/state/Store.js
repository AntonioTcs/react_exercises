import { createStore } from "redux";
import { todosReducer } from "./Todos";

export const store = createStore(todosReducer);
