import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./errorPage";

const size =
  window.screen.height < window.screen.width ? window.screen.height : window.screen.width;

console.log("size", size);

const router = createBrowserRouter([
  {
    path: "/",
    element: size >= 600 ? <App page="home" /> : <App page="home" mobile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: size >= 600 ? <App page="home" /> : <App page="home" mobile />,
  },
  {
    path: "/openinghours",
    element: size >= 600 ? <App page="openinghours" /> : <App page="openinghours" mobile />,
  },
  {
    path: "/manifesto",
    element: size >= 600 ? <App page="manifesto" /> : <App page="manifesto" mobile />,
  },
  {
    path: "/contact",
    element: size >= 600 ? <App page="contact" /> : <App page="contact" mobile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("ms_page") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
