import React, { useEffect, useState } from "react";

export function App() {
  const [view, setView] = useState(true);

  function buttonClickHandle() {
    setView((view) => !view);
  }

  return (
    <div>
      <button onClick={buttonClickHandle}>Unmount Counter</button>
      {view && <Counter />}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted and interval is going to start");
    const interval = setInterval(() => {
      setCount((c) => {
        c = c + 1;
        console.log(c);
      });
    }, 1000);

    return () => {
      console.log("Clearing interval");
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
