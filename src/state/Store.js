import { createStore } from "redux";
import { counterReducer } from "./Counter";

export const store = createStore(counterReducer);
