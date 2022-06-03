const defaultState = 0;

const INCREMENT = "COUNTER@INCREMENT";
const DECREMENT = "COUNTER@DECREMENT";
const RESET = "COUNTER@RESET";

export function incrementCounter(by = 1) {
  return {
    type: INCREMENT,
    payload: by,
  };
}
export function decrementCounter(by = 1) {
  return {
    type: DECREMENT,
    payload: by,
  };
}
export function resetCounter(by = 1) {
  return {
    type: RESET,
  };
}

export function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT: {
      return state + action.payload;
    }
    case DECREMENT: {
      return state - action.payload;
    }
    case RESET: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
}
