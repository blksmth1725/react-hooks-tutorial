import React from "react";
import { useForm } from "../utils/hookHelpers";

function UseForm() {
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <input
        onChange={handleChange}
        name="email"
        placeholder="Email"
        value={values.email}
        type="email"
      />
      <input
        onChange={handleChange}
        name="password"
        placeholder="Password"
        value={values.password}
        type="password"
      />
    </div>
  );
}

export default UseForm;
