import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./errorPage";
import { OpeningTimes, Manifesto, Contact, LandingPage } from "./components/sections";

const size =
  window.screen.height < window.screen.width ? window.screen.height : window.screen.width;

console.log("size", size);

const router = createBrowserRouter([
  {
    path: "/",
    element: size >= 768 ? <App page="home" /> : <App mobile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: size >= 768 ? <App page="home" /> : <LandingPage mobile />,
  },
  {
    path: "/opening",
    element: size >= 768 ? <App page="opening" /> : <OpeningTimes />,
  },
  {
    path: "/manifesto",
    element: size >= 768 ? <App page="manifesto" /> : <Manifesto />,
  },
  {
    path: "/contact",
    element: size >= 768 ? <App page="contact" /> : <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("ms_page") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);
