import React from "react";
import { Route, Routes } from "react-router-dom";

import ImageMouseOverOut from "./Routes/ImageMouseOverOut";
import Layout from "./Layout/Layout";
import Home from "./Routes/Home";
import UseForm from "./Routes/UseForm";
import StateExample from "./Routes/StateExample";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="state" element={<StateExample />} />
          <Route path="useForm" element={<UseForm />} />
          <Route path="useRef" element={<ImageMouseOverOut />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
