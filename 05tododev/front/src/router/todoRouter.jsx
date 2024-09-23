import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const loading = <div className="bg-red-400">Loading...</div>;

const TodoList = lazy(() => import("../pages/todo/ListPage.jsx"));
const TodoAdd = lazy(() => import("../pages/todo/AddPage.jsx"));
const TodoRead = lazy(() => import("../pages/todo/ReadPage.jsx"));

const todoRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={loading}>
          <TodoList />
        </Suspense>
      ),
    },
    {
      path: "",
      element: <Navigate replace to="list" />,
    },
    {
      path: "add",
      element: (
        <Suspense fallback={loading}>
          <TodoAdd />
        </Suspense>
      ),
    },
    {
      path: ":tno",
      element: (
        <Suspense fallback={loading}>
          <TodoRead />
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
