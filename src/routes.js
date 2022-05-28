import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Repositories from "./pages/repositories";
import Home from "./pages/home/index";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
