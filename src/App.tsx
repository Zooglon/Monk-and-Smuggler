import React from "react";
import logo from "./images/MonkandSmugglerLogoOnBlack.svg";
import "./App.css";
import { Nav } from "./components";

const App = () => {
  return (
    <div className="siteContainer">
      <Nav />
      <div className="pageContainer">
        <div className="logoOverlay"></div>
        <div className="logoContainer">
          <img src={logo} className="site-logo" alt="Monk & Smuggler logo" />
        </div>
        <div id="os_main" className="metaContainer">
          <h1>Monk & Smuggler</h1>
          <h2>Coffee | Books | Culture</h2>
        </div>
        <div className="textContainer">
          <h3>Something is brewing...</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
