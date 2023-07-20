import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "../routes/About.tsx";
import Announcement from "../routes/Announcement.tsx";
import App from "../routes/App.js";
import Error from "../routes/Error.tsx";
import Rescue from "../routes/Rescue.tsx";

const routes = createBrowserRouter([
    {
      children: [
        {
          element: <About />,
          path: "/about",
        },
        {
          element: <Announcement />,
          path: "/announcement",
        },
        {
          element: <Rescue />,
          path: "/",
        },
      ],
      element: <App />,
      errorElement: <Error />,
      path: "/",
    },
  ]);

export default function DefinitionRoute(){
    return(
        <>
            <RouterProvider router={routes}/>
        </>
    )
}
