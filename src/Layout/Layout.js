import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ margin: "40px" }}>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">Home</Link>
        <Link to="/state">State Examples</Link>
        <Link to="/useForm">Form Example</Link>
        <Link to="/useRef">UseRef Example</Link>
      </nav>
      <div style={{ margin: "35px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
