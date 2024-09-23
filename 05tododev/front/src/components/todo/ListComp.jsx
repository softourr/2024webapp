import React, { useEffect, useState } from "react";
import { getTodoList } from "../../api/todoApi";
import { useSearchParams } from "react-router-dom";
import ListItemComp from "./ListItemComp";
import useCustomMove from "../../hooks/useCustomMove";
import PagerComp from "../common/PagerComp";

const initialState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

function ListComp() {
  const [data, setData] = useState(initialState);

  const { page, size, moveToList, refresh, moveToRead, moveToWrite } =
    useCustomMove();

  useEffect(() => {
    getTodoList({ page, size })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.error("TODO LIST ERROR : ", err);
      });
  }, [page, size, refresh]);

  return (
    <div className="px-5">
      {data.dtoList.length !== 0 ? (
        data.dtoList.map((item, i) => (
          <div
            key={i}
            className="mb-2"
            onClick={() => {
              moveToRead(item.tno);
            }}
          >
            <ListItemComp
              check={item.complete}
              title={item.title}
              writer={item.writer}
              date={item.dueDate}
            />
          </div>
        ))
      ) : (
        <p>Todo가 없어요!</p>
      )}
      <div className="flex my-4 justify-end">
        <button
          className="transition duration-200 bg-red-500 hover:bg-red-700 rounded py-2 px-4 text-white"
          onClick={() => {
            moveToWrite();
          }}
        >
          글쓰기
        </button>
      </div>
      <PagerComp serverData={data} movePage={moveToList} />
    </div>
  );
}

export default ListComp;
