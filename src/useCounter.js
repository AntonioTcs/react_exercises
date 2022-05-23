import { useState, useCallback } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = useCallback(function handleIncrement() {
    setCount((count) => count + 1);
  }, []);

  const handleDecrement = useCallback(function handleDecrement() {
    setCount((count) => count - 1);
  }, []);

  const handleReset = useCallback(
    function handleReset() {
      setCount(initialValue);
    },
    [initialValue]
  );

  return {
    counter: count,
    increment: handleIncrement,
    decrement: handleDecrement,
    reset: handleReset,
  };
}
