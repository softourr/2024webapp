import React from "react";
import "./Visual.css";

function VisualComp() {
  return (
    <div className="container mx-auto bg-sb-400 visual h-96 flex justify-center md:justify-start items-center px-10">
      <div>
        <p className="text-center md:text-start text-blue-50 md:text-blue-900">
          나이키 페가수스 41
        </p>
        <h2 className="text-center md:text-start text-blue-50 md:text-blue-900 text-2xl font-bold">
          에너지를 낭비하지 마세요.
        </h2>
        <div className="text-center md:text-start bg-sb-700 text-white px-6 py-4 block md:inline-block rounded-3xl mt-3 cursor-pointer hover:bg-sb-500 duration-100">
          구매하기
        </div>
      </div>
    </div>
  );
}

export default VisualComp;
