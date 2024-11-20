import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/skills",
      element: <Skills />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
