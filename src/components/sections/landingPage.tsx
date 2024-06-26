import logo from "../../images/MonkandSmugglerLogoOnBlack.svg";

const comments = [
  "Feel like i'm on holiday",
  "Finally, good vegan options",
  "You've brought Shoreditch to Stafford",
  "VEGAN CAKES!",
  "Best coffee shop in town!",
  "Best cappuccino I've ever had",
  "I love the clearly labelled vegan",
  "You're giving me house decór inspo!",
];

export const LandingPage = () => (
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
);
