import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "../screens/About.tsx";
import App from "../screens/App.js";
import Error from "../screens/Error.tsx";

const routes = createBrowserRouter([
  {
    children: [
      {
        element: <About />,
        path: "/",
      },
    ],
    element: <App />,
    errorElement: <Error />,
    path: "/",
  },
]);

export default function DefinitionRoute() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}