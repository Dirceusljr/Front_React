import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "../pages/Base";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Base />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
