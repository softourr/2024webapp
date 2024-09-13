import React, { useEffect, useMemo, useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  // useEffect는 순서대로 실행 됨
  useEffect(() => {
    console.log(num);
  }, []);

  const a = useMemo(() => {
    return num * num;
  }, [num]);

  return (
    <div>
      <p>{a}</p>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        click
      </button>
    </div>
  );
}

export default App;
