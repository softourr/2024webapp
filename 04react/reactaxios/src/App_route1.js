import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/About";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <nav>
        <Link to="/" style={{ margin: "0 10px 0 0" }}>
          HOME
        </Link>
        |
        <NavLink
          to="/about"
          activeClassName="active"
          style={{ margin: "0 10px 0 10px" }}
        >
          ABOUT
        </NavLink>
        |
        <Link to="/product" style={{ margin: "0 0 0 10px" }}>
          PRODUCT
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:item" element={<Product />} />
      </Routes>
      <footer>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
        doloribus!
      </footer>
    </div>
  );
}

export default App;
