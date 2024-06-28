import logo from "../../images/MonkandSmugglerLogoOnBlack.svg";

const comments = [
  "Feel like i'm on holiday",
  "Finally, good vegan options",
  "You've brought Shoreditch to Stafford",
  "Best coffee shop in town!",
  "Amazing coffee, I was sad when it was over",
  "Best cappuccino I've ever had",
  "I love the clearly labelled food",
  "VEGAN CAKES!",
  "You're giving me house decór inspo!",
  "This is just what Stafford needs",
  "I've been waiting for something this",
  "The coffee is so good",
];

const mobilePage = (
  <div className="pageContainer" style={{ backgroundColor: "var(--brown)" }}>
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

const fullPage = (
  <div className="tileContainer" style={{ backgroundColor: "var(--green)" }}>
    Hello
  </div>
);

export const LandingPage = ({ mobile }: { mobile?: boolean }) => (!mobile ? fullPage : mobilePage);
