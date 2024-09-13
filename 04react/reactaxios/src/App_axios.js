import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const listCnt = 10;
  const pagerCnt = 5;
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const api = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
        setTotalPage(Math.ceil(res.data.length / listCnt));
      })
      .catch((err) => {
        console.error("ERROR : ", err);
      });
  };

  useEffect(() => {
    api();
  }, []);

  const pageViewNum = () => {
    const pageNums = [];
    const startPage = Math.floor(((currentPage - 1) / pagerCnt) * pagerCnt + 1);
    const endPage = Math.min(startPage + pagerCnt - 1, totalPage);

    for (let i = startPage; i <= endPage; i++) {
      pageNums.push(
        <span
          onClick={() => {
            setCurrentPage(i);
          }}
          style={{
            padding: "0 5px",
            margin: "0 5px",
            borderRadius: "10px",
            cursor: "pointer",
            backgroundColor: currentPage == i ? "#333" : "white",
            color: currentPage == i ? "white" : "black",
          }}
          key={i}
        >
          {i}
        </span>
      );
    }

    return pageNums;
  };

  const currentPageData = () => {
    const startIndex = (currentPage - 1) * listCnt;
    const endIndex = startIndex + listCnt;

    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      {currentPageData()?.map((item, i) => (
        <div key={i}>
          {item.id} - {item.title}
        </div>
      ))}
      <div className="flex" style={{ display: "flex" }}>
        {currentPage > 1 && (
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            &lt;
          </button>
        )}
        <div style={{ fontSize: "2em" }}>{pageViewNum()}</div>
        {currentPage < totalPage && (
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            &gt;
          </button>
        )}
      </div>

      <p>
        {currentPage} / {totalPage}
      </p>
    </div>
  );
}

export default App;
