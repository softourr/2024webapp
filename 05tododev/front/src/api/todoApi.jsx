import axios from "axios";

const API_SERVER_HOST = "http://localhost:8081";

const PREFIX_URL = `${API_SERVER_HOST}/api/todo`;

const getTodoList = async (pageParams) => {
  const { page, size } = pageParams;
  const todoList = await axios.get(`${PREFIX_URL}/list`, {
    params: { page: page, size: size },
  });

  return todoList.data;
};

const getSpecificTodo = async (tno) => {
  const todo = await axios.get(`${PREFIX_URL}/${tno}`);

  return todo;
};

const addTodo = async (obj) => {
  const res = await axios.post(`${PREFIX_URL}/`, obj);

  return res;
};

export { getTodoList, getSpecificTodo, addTodo };
