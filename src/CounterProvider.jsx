// CounterProvider.js
import React, { useReducer } from "react";
import CounterContext from "./CounterContext";
import { counterReducer } from "./CounterReducer";

const initialState = { count: 0 };

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
