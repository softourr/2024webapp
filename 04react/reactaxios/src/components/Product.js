import React from "react";
import { Outlet, useParams } from "react-router-dom";

function Product() {
  const { item } = useParams();

  return (
    <div>
      Product {item}
      <br />
      <Outlet />
    </div>
  );
}

export default Product;
