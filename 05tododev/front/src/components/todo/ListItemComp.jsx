import React from "react";

function ListItemComp({ check, title, writer, date }) {
  return (
    <div className="border rounded-xl px-4 py-2 flex items-center justify-between hover:bg-slate-200 duration-300">
      <div className="flex items-center">
        {check ? (
          <div className="h-5 w-5 rounded-full bg-blue-600 mr-4 cursor-pointer" />
        ) : (
          <div className="h-5 w-5 rounded-full border-gray-400 border-2 mr-4 cursor-pointer" />
        )}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{writer}</p>
        </div>
      </div>
      <p className="text-gray-400">{date}</p>
    </div>
  );
}

export default ListItemComp;
