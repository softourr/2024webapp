// rfce
// React Function Component + Export
import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      App
      <Button
        textOnly={toggle}
        onClick={() => {
          setToggle(!toggle);
        }}
        hello="hello"
      >
        Click!
      </Button>
      <Button textOnly={false}>out</Button>
    </div>
  );
}

export default App;
