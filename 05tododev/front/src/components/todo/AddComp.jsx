import React, { useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { addTodo } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";

const initState = {
  title: "",
  writer: "",
  dueDate: "",
};

function AddComp() {
  const [todo, setTodo] = useState({ ...initState });
  const [result, setResult] = useState(false);
  const { moveToList } = useCustomMove();

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };

  return (
    <div>
      {result ? (
        <ResultModal
          title="새로운 TODO가 추가되었습니다!"
          content={`${todo.title} 추가 완료`}
          callbackFn={() => {
            setTodo({ ...initState });
            setResult(false);
          }}
        />
      ) : null}
      <div className="flex justify-start">
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-2">
            <div>title</div>
            <input
              type="text"
              name="title"
              value={todo.title}
              className="border-gray-300 border-2 rounded w-48"
              onChange={handleChangeTodo}
            />
          </div>
          <div className="flex gap-2">
            <div>writer</div>
            <input
              type="text"
              name="writer"
              value={todo.writer}
              className="border-gray-300 border-2 rounded w-48"
              onChange={handleChangeTodo}
            />
          </div>
          <div className="flex gap-2">
            <div>due date</div>
            <input
              type="date"
              name="dueDate"
              value={todo.dueDate}
              className="border-gray-300 border-2 rounded w-48"
              onChange={handleChangeTodo}
            />
          </div>
        </div>
      </div>
      <div className="flex my-4 justify-end gap-4">
        <button
          className="transition duration-200 bg-red-500 hover:bg-red-700 rounded py-2 px-4 text-white"
          onClick={() => {
            moveToList();
          }}
        >
          리스트
        </button>
        <button
          className="transition duration-200 bg-green-500 hover:bg-green-700 rounded py-2 px-4 text-white"
          onClick={() => {
            setResult(true);
            addTodo(todo);
          }}
        >
          글쓰기
        </button>
      </div>
    </div>
  );
}

export default AddComp;
