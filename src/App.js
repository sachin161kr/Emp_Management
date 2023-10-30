import logo from "./logo.svg";
import "./App.css";

import Login from "./pages/Login";

import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    // {
    //   path: "/jd",
    //   element: <JobDescription />,
    // },
    // {
    //   path: "addPost",
    //   element: <PostJob />,
    // },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
