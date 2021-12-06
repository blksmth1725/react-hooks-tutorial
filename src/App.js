import React, { useState } from "react";
import "./App.css";

import { useForm } from "../src/utils/hookHelpers";

function App() {
  const [count, setCount] = useState(0);
  const [values, handleChange] = useForm("");

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
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
