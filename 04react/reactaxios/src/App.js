import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutComp from "./layouts/LayoutComp";
import Home from "./components/home/Home";
import About from "./components/About";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />}>
            <Route path=":id" element={<>WOW</>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
