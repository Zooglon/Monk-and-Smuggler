import { MouseEvent, useState } from "react";
import "./App.css";
import { MobileNav } from "./components";
import { Contact, LandingPage, Manifesto, OpeningTimes } from "./components/sections";
import { NavigateFunction, useNavigate } from "react-router-dom";

const RenderPage = ({ page }: { page?: string | undefined }) => {
  let pageSelect;
  switch (page) {
    case "":
    case "home":
      pageSelect = <LandingPage mobile={false} />;
      break;

    case "opening":
      pageSelect = <OpeningTimes />;
      break;

    case "manifesto":
      pageSelect = <Manifesto />;
      break;

    case "contact":
      pageSelect = <Contact />;
      break;

    default:
      pageSelect = <LandingPage mobile={false} />;
  }

  return <section className="sliderContentContainer">{pageSelect}</section>;
};

const expand = (
  e: MouseEvent,
  activeSlider: string,
  setActiveSlider: (value: string) => void,
  navigate: NavigateFunction
) => {
  let elem = e.target as HTMLElement;
  if (elem.id !== activeSlider) {
    document.querySelector(".expanded") &&
      document.querySelector(".expanded")?.classList.remove("expanded");

    if (elem.tagName === "SPAN") {
      elem = elem.parentElement?.parentElement ?? elem;
    }
    console.log(elem);
    setActiveSlider(elem.id);
    elem.classList.add("expanded");
    navigate(`/${elem.id}`);
  }
};

const MobilePage = () => (
  <div className="siteContainer flex col">
    <MobileNav />
    <LandingPage mobile={true} />
  </div>
);

const App = ({ page, mobile }: { page?: string | undefined; mobile?: boolean }) => {
  const [activeSlider, setActiveSlider] = useState("home");
  const navigate = useNavigate();

  console.log("Page", page);

  return mobile ? (
    <MobilePage />
  ) : (
    <div className="siteContainer flex col">
      <div className="container flex row">
        <div
          id="home"
          className="slider expanded"
          onClick={(e) => expand(e, activeSlider, setActiveSlider, navigate)}
          style={{ backgroundColor: "var(--green)" }}>
          <aside className="sliderTitleContainer">
            <span className="sliderTitle">MONK & SMUGGLER</span>
          </aside>
          {activeSlider === "home" && <RenderPage page="home" />}
        </div>
        <div
          id="opening"
          className="slider invert"
          onClick={(e) => expand(e, activeSlider, setActiveSlider, navigate)}
          style={{ backgroundColor: "var(--cream)" }}>
          <aside className="sliderTitleContainer">
            <span className="sliderTitle">OPENING HOURS</span>
          </aside>
          {activeSlider === "opening" && <RenderPage page="opening" />}
        </div>
        <div
          id="manifesto"
          className="slider"
          onClick={(e) => expand(e, activeSlider, setActiveSlider, navigate)}
          style={{ backgroundColor: "var(--orange)" }}>
          <aside className="sliderTitleContainer">
            <span className="sliderTitle">MANIFESTO</span>
          </aside>
          {activeSlider === "manifesto" && <RenderPage page="manifesto" />}
        </div>
        <div
          id="contact"
          className="slider"
          onClick={(e) => expand(e, activeSlider, setActiveSlider, navigate)}
          style={{ backgroundColor: "var(--brown)" }}>
          <aside className="sliderTitleContainer">
            <span className="sliderTitle">SAY HI</span>
          </aside>
          {activeSlider === "contact" && <RenderPage page="contact" />}
        </div>
      </div>
    </div>
  );
};

export default App;
