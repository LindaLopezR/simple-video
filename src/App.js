import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SimpleLayout from "./layouts/SimpleLayout";
import Home from "./pages/Home";
import Section from "./pages/Section";
import Note from "./pages/Note";

let router = createBrowserRouter([
  {
    path: "/",
    element: <SimpleLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/:section",
        element: <Section />
      },
      {
        path: "/:section/:note",
        element: <Note />
      }
    ],
  },

]);

export default function App() {
  return (
    <RouterProvider
      router={router}
    />
  );
};
