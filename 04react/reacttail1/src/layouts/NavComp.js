import React from "react";

function NavComp() {
  return (
    <div className="bg-gray-800 py-2 drop-shadow-md">
      <nav className="container mx-auto flex justify-between px-4 md:px-2">
        <h1>
          <a
            href="#"
            className="block h-full text-3xl font-bold flex justify-center items-center text-white"
          >
            NIKE
          </a>
        </h1>
        <div className="gnb hidden md:flex">
          <ul className="flex">
            <li>
              <a className="block px-4 py-3 cursor-pointer hover:text-blue-300 text-white">
                New & Featured
              </a>
            </li>
            <li>
              <a className="block px-4 py-3 cursor-pointer hover:text-blue-300 text-white">
                Men
              </a>
            </li>
            <li>
              <a className="block px-4 py-3 cursor-pointer hover:text-blue-300 text-white">
                Women
              </a>
            </li>
            <li>
              <a className="block px-4 py-3 cursor-pointer hover:text-blue-300 text-white">
                Kids
              </a>
            </li>
            <li>
              <a className="block ps-4 py-3 cursor-pointer hover:text-blue-300 text-white">
                Sale
              </a>
            </li>
          </ul>
        </div>
        <div className="hamBtn block md:hidden flex justify-center items-center">
          BTN
        </div>
      </nav>
    </div>
  );
}

export default NavComp;
