import React, { useState, useEffect } from "react";
import "./App.css";

import { useForm } from "../src/utils/hookHelpers";
import Hello from "./components/Hello";

function App() {
  const [count, setCount] = useState(0);
  const [showHello, setShowHello] = useState(true);
  const [values, handleChange] = useForm({ email: "", password: "" });

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const toggle = () => {
    setShowHello(!showHello);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      console.log(e);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <button onClick={toggle}>Toggle</button>
      {showHello && <Hello />}
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <div>{count}</div>
      </div>

      <div>
        <input
          onChange={handleChange}
          name="email"
          value={values.email}
          type="email"
        />
        <input
          onChange={handleChange}
          name="password"
          value={values.password}
          type="password"
        />
      </div>
    </div>
  );
}

export default App;
