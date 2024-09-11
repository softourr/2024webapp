import React, { useState } from "react";

function App() {
  const [data, setData] = useState("test");

  function dataChange() {
    setData("test changed");
  }

  return (
    <>
      <div style={{ background: "pink", padding: "10px" }}>
        <SubCom1 data={data} dataModi1={dataChange} />
      </div>
    </>
  );
}

function SubCom1(props) {
  return (
    <>
      <div style={{ background: "skyblue", padding: "10px" }}>
        <h3>SubCom1</h3>
        <p>{props.data}</p>
        <SubCom2 data={props.data} dataModi2={props.dataModi1} />
        <button onClick={props.dataModi1}>변경1</button>
      </div>
    </>
  );
}

function SubCom2(props) {
  return (
    <>
      <div style={{ background: "green", padding: "10px" }}>
        <h3>SubCom2</h3>
        <p>{props.data}</p>
        <button onClick={props.dataModi2}>변경2</button>
      </div>
    </>
  );
}

export default App;
