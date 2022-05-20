import { useCounter } from "./useCounter";

export function App({ initialvalue = 0 }) {
  const { counter, increment, decrement, reset } = useCounter(initialvalue);

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
