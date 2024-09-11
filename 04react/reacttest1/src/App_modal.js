import React, { useState } from "react";
import ModalView from "./components/ModalView";

function App() {
  const [data, setData] = useState([
    "1. Lorem ipsum dolor sit amet.",
    "2. Lorem ipsum dolor sit amet.",
    "3. Lorem ipsum dolor sit amet.",
    "4. Lorem ipsum dolor sit amet.",
  ]);

  const [num, setNum] = useState(0);
  const [modal, setModal] = useState(false);

  const listview = (i) => {
    setNum(i);
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <div>
        App
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              listview(i);
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {modal ? (
        <ModalView vContent={data[num]} closeModal={handleClose} />
      ) : null}
    </>
  );
}

export default App;
