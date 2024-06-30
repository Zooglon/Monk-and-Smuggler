import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./errorPage";

const size =
  window.screen.height < window.screen.width ? window.screen.height : window.screen.width;

const mobile = size >= 600 ? false : true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App page="home" mobile={mobile} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <App page="home" mobile={mobile} />,
  },
  {
    path: "/openinghours",
    element: <App page="openinghours" mobile={mobile} />,
  },
  {
    path: "/manifesto",
    element: <App page="manifesto" mobile={mobile} />,
  },
  {
    path: "/contact",
    element: <App page="contact" mobile={mobile} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("ms_page") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
