import React, { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

export const Counter = () => {
  const { count, onIncrement, onDecrement } = useContext(CounterContext);

  return (
    <div className="counter">
      <h1>Counter: {count} </h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};
