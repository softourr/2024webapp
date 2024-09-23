import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import todoRouter from "./todoRouter";

const loading = <div className="bg-red-400">Loading...</div>;

// Main을 직접 가져오는게 아니라, Lazy Load 되게 작성
const Main = lazy(() => import("../pages/MainComp"));
const About = lazy(() => import("../pages/AboutComp"));
// const Todo = lazy(() => import("../pages/TodoComp"));
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/todo",
    element: (
      <Suspense fallback={loading}>
        <TodoIndex />
      </Suspense>
    ),
    children: todoRouter(),
  },
]);

export default root;
