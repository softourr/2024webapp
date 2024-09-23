import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const counterValue = useSelector((state) => state.value);
  const titleValue = useSelector((state) => state.title);

  const dispatch = useDispatch();

  return (
    <>
      {counterValue} / {titleValue}
      <button
        onClick={() => {
          dispatch({ type: "up", payload: 1 });
        }}
      >
        업
      </button>
      <button
        onClick={() => {
          dispatch({ type: "down", payload: 1 });
        }}
      >
        다운
      </button>
    </>
  );
}

export default Counter;
