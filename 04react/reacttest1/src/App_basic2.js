import React, { useState } from "react";

function App() {
  const [pro, setPro] = useState(["사과", "바나나", "참외"]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [input, setInput] = useState("");

  return (
    <>
      <div>App {title}</div>
      {pro.map((item, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              setModal(true);
              setTitle(i);
            }}
          >
            {item}
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <p>{input}</p>
      <button
        onClick={() => {
          let copy = [input, ...pro];
          setPro(copy);
          setInput("");
        }}
      >
        Submit
      </button>
      {modal ? (
        <Modal
          title={pro[title]}
          inx={title}
          setModal={() => setModal(false)}
        />
      ) : null}
    </>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modalWrap">
        <div className="modal">
          <h3>{props.title}</h3>
          <p
            onClick={() => {
              props.setModal();
            }}
          >
            details
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
