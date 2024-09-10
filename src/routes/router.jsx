import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "../pages/Base";
import Home from "../pages/Home";
import { FilterProvider } from "../context/FilterContext";


const Router = () => {
  return (
    <BrowserRouter>
      <FilterProvider>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </FilterProvider>
    </BrowserRouter>
  );
};

export default Router;
