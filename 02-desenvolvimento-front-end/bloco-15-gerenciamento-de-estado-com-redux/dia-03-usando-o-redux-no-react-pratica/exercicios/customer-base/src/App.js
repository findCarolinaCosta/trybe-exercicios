import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/login" component={} />
        <Route path="/registered" component={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;