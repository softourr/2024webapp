// rfce ENTER

import React, { useState } from "react";
import "./index.css";
import logo from "./logo.svg";

let test = "wow";

// a는 값, b는 변경함수
// const [a,b] = useState();

function App() {
  let [box, setBox] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState("var title");
  let [shop, setShop] = useState(["apple", "banana", "carrot"]);

  return (
    // fragment <></>
    <>
      <div className="container">
        <div>hi</div>
        <h2>{test}</h2>
        <header style={{ fontSize: "2em" }}>header</header>
        <img
          src={logo}
          width="100px"
          height="100px"
          style={{ background: "red" }}
        ></img>
      </div>
      <p>{box}</p>
      <button
        onClick={() => {
          setBox(++box);
        }}
      >
        click
      </button>
      <br />
      <br />
      <button onClick={() => setModal(!modal)}>MODAL</button>
      {modal ? <Modal title={title} image="test1" /> : null}

      {shop.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h3>{props.title}</h3>
        <p>{props.image}</p>
      </div>
    </>
  );
}

export default App;
