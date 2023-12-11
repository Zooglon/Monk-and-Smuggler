import React from "react";
import logo from "./images/MonkandSmugglerLogoOnBlack.svg";
import "./App.css";

const App = () => {
  return (
    <div className="pageContainer">
      <div className="logoOverlay"></div>
      <div className="logoContainer">
        <img src={logo} className="site-logo" alt="Monk & Smuggler logo" />
      </div>
      <div className="metaContainer">
        <h1>Monk & Smuggler</h1>
        <h2>Coffee | Books | Culture</h2>
      </div>
      <div className="textContainer">
        <h3>Something is brewing...</h3>
      </div>
    </div>
  );
};

export default App;
