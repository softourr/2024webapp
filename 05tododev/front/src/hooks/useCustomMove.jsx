import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const getNum = (param, dValue) => {
  if (!param) {
    return dValue;
  }

  return parseInt(param);
};

const useCustomMove = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);

  const [queryParams] = useSearchParams();
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);

  const queryDefault = createSearchParams({ page, size }).toString();

  const moveToList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, 1);
      const sizeNum = getNum(pageParam.size, 10);
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }

    navigate({ pathname: "../list", search: queryStr });

    setRefresh(!refresh);
  };

  const moveToRead = (num) => {
    navigate({
      pathname: `../${num}`,
    });
  };

  const moveToWrite = () => {
    navigate({
      pathname: `../add`,
    });
  };

  return { page, size, moveToList, refresh, moveToRead, moveToWrite };
};

export default useCustomMove;
