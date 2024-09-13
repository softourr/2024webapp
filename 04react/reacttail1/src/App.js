import React, { useState } from "react";
// import NavComp from "./layouts/NavComp";
// import VisualComp from "./components/home/VisualComp";
// import SectionComp from "./components/home/SectionComp";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  const onClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=2&_limit=10")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => {
        console.error("ERROR : ", e);
      });
  };

  return (
    <>
      {/* <NavComp />
      <VisualComp />
      <SectionComp /> */}
      <div className="flex flex-col justify-center items-center">
        <button
          className="bg-red-500 text-white px-10 py-3 rounded-3xl font-bold"
          onClick={onClick}
        >
          Click
        </button>
        {data && data.map((item, i) => <div>{item.title}</div>)}
      </div>
    </>
  );
}

export default App;
