import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/Home/index.tsx";
import Naujienos from "./pages/Naujienos/index.tsx";
import ApieMus from "./pages/Apie-Mus/index.tsx";
import Paslaugos from "./pages/Paslaugos/index.tsx";
import Teisine from "./pages/Teisine/index.tsx";
import Page404 from "./pages/404/index.tsx";
import "./index.css";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <Page404 />,
      children: [
         {
            path: "",
            element: <Home />,
         },
         {
            path: "/naujienos",
            element: <Naujienos />,
         },
         {
            path: "/apie-mus",
            element: <ApieMus />,
         },
         {
            path: "/paslaugos",
            element: <Paslaugos />,
         },
         {
            path: "/teisine-informacija",
            element: <Teisine />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
);
