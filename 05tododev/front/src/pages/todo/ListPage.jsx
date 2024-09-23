import React from "react";
import ListComp from "../../components/todo/ListComp";

function ListPage() {
  return (
    <div>
      <h3 className="text-2xl font-extrabold py-3 px-6 flex justify-end">
        To Do List
      </h3>
      <hr className="py-3" />
      <ListComp />
    </div>
  );
}

export default ListPage;
