// Counter.js
import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{state.count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
