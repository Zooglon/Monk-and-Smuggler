import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./errorPage";
import { OpeningTimes, Manifesto, Contact } from "./components/sections";

const size =
  window.screen.height > window.screen.width ? window.screen.height : window.screen.width;

const router = createBrowserRouter([
  {
    path: "/",
    element: size >= 768 ? <App page="home" /> : <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/openinghours",
    element: size >= 768 ? <App page="openingHours" /> : <OpeningTimes />,
  },
  {
    path: "/manifesto",
    element: size >= 768 ? <App page="about" /> : <Manifesto />,
  },
  {
    path: "/contact",
    element: size >= 768 ? <App page="contact" /> : <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("ms_page") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
