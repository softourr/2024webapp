import React from "react";
import { NavLink } from "react-router-dom";

function NavComp() {
  return (
    <nav>
      <h1>LOGO</h1>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavComp;
