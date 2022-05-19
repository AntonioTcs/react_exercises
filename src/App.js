import { useEffect, useState } from "react";

function changeFunction(number) {
  console.log(`Counter has changed. Current value is ${number}`);
}

export function App() {
  return (
    <div>
      <Counter onCounterChange={changeFunction} />
    </div>
  );
}

function Counter({ onCounterChange }) {
  const [counter, setCounter] = useState(0);

  function clickEventHandler() {
    setCounter((counter) => counter + 1);
  }

  useEffect(() => {
    onCounterChange(counter);
  }, [counter, onCounterChange]);

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={clickEventHandler}>Click!</button>
    </div>
  );
}
