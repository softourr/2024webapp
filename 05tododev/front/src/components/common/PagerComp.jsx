import React from "react";

function PagerComp({ serverData, movePage }) {
  return (
    <div className="flex gap-4 justify-center">
      {serverData.prev ? (
        <div className="p-1 cursor-pointer w-12 text-center bg-gray-300 rounded-lg text-white">
          &lt;
        </div>
      ) : null}
      {serverData.pageNumList.map((item, i) => {
        return (
          <div
            key={i}
            onClick={() => movePage({ page: item })}
            className={`cursor-pointer p-2 w-12 text-center bg-gray-300 rounded-lg text-white
                ${serverData.current === item ? "font-bold bg-gray-400" : ""}`}
          >
            {item}
          </div>
        );
      })}
      {serverData.next ? <div className="p-1">&gt;</div> : null}
    </div>
  );
}

export default PagerComp;
