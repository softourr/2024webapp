import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <nav className="bg-blue-200 py-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold">logo</h1>
          <ul className="flex gap-4">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/todo">TODO</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto py-4">{children}</div>
      <footer className="bg-gray-700">
        <div className="container mx-auto py-4 text-white">Footer</div>
      </footer>
    </>
  );
}

export default Layout;
