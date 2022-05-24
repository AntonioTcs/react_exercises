import { useState } from "react";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="John" />} />
      <Route path="counter" element={<Counter />} />
    </Routes>
  );
}

function Welcome({ name = "World" }) {
  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  );
}

export function Counter() {
  const [counter, setCounter] = useState(0);

  function clickEventHandler() {
    setCounter((counter) => counter + 1);
  }

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={clickEventHandler}>Click!</button>
    </div>
  );
}
