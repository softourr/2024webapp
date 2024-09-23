import React from "react";
import Layout from "../../layout/Layout";
import { Outlet, useNavigate } from "react-router-dom";

function IndexPage() {
  const navigate = useNavigate();

  const onClick = ({ path }) => {
    navigate({ pathname: path });
  };

  return (
    <Layout>
      <nav className="flex justify-end">
        <ul className="flex gap-4">
          <li
            onClick={() => {
              onClick({ path: "list" });
            }}
            className="cursor-pointer"
          >
            list
          </li>
          <li
            onClick={() => {
              onClick({ path: "1" });
            }}
            className="cursor-pointer"
          >
            read
          </li>
          <li
            onClick={() => {
              onClick({ path: "add" });
            }}
            className="cursor-pointer"
          >
            add
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </Layout>
  );
}

export default IndexPage;
