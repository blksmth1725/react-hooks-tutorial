import React, { useState } from "react";
import Hello from "../components/Hello";

function StateExample() {
  const [count, setCount] = useState(0);
  const [showHello, setShowHello] = useState(true);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const toggle = () => {
    setShowHello(!showHello);
  };
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {showHello && <Hello />}
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <div>{count}</div>
      </div>
    </div>
  );
}

export default StateExample;
