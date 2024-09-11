import React from "react";

function ModalView({ vContent, closeModal }) {
  return (
    <div>
      ModalView
      <p>{vContent}</p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
}

export default ModalView;
