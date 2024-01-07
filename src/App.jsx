import React from "react";
import "./App.css";
import Counter from "./Counter";
import CounterProvider from "./CounterProvider";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Counter App</h1>
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;
