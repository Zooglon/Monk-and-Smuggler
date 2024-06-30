import { MouseEvent, useEffect, useState } from "react";
import "./App.css";
import { MobileNav } from "./components";
import { Contact, LandingPage, Manifesto, OpeningHours } from "./components/sections";
import { NavigateFunction, useNavigate } from "react-router-dom";

const RenderPage = ({ page, mobile }: { page?: string | undefined; mobile?: boolean }) => {
  let pageSelect;
  switch (page) {
    case "":
    case "home":
      pageSelect = <LandingPage mobile={mobile ?? false} />;
      break;

    case "openinghours":
      pageSelect = <OpeningHours mobile={mobile ?? false} />;
      break;

    case "manifesto":
      pageSelect = <Manifesto mobile={mobile ?? false} />;
      break;

    case "contact":
      pageSelect = <Contact mobile={mobile ?? false} />;
      break;

    default:
      pageSelect = <LandingPage mobile={mobile ?? false} />;
  }

  return mobile ? pageSelect : <section className="sliderContentContainer">{pageSelect}</section>;
};

const expand = (
  e: MouseEvent,
  activeSlider: string,
  setActiveSlider: (value: string) => void,
  navigate: NavigateFunction
) => {
  let elem = e.target as HTMLElement;
  if (elem.classList.contains("slider") || elem.classList.contains("sliderTitle")) {
    document.querySelector(".expanded") &&
      document.querySelector(".expanded")?.classList.remove("expanded");

    if (elem.tagName === "SPAN") {
      elem = elem.parentElement?.parentElement ?? elem;
    }
    setActiveSlider(elem.id);
    elem.classList.add("expanded");
    navigate(`/${elem.id}`);
  }
};

const MobilePage = ({ page }: { page?: string | undefined }) => (
  <div className="siteContainer flex col">
    <MobileNav />
    <RenderPage page={page} mobile />
  </div>
);

const App = ({ page, mobile }: { page: string; mobile?: boolean }) => {
  const [activeSlider, setActiveSlider] = useState(page);
  const navigate = useNavigate();

  useEffect(() => {
    if (document.getElementById(`${page}`)) {
      document.getElementById(`${page}`)?.classList.add("expanded");
    }
  }, [page]);

  return mobile ? (
    <MobilePage page={page} />
  ) : (
    <div className="siteContainer flex col">
      <div className="container flex row">
        <div
          id="home"
          className="slider"
          onClick={(e) => expand(e, activeSlider, setActiveSlider, navigate)}
          style={{ backgroundColor: "var(--green)" }}>
          <aside className="sliderTitleContainer">
            <span className="sliderTitle">MONK & SMUGGLER</span>
          </aside>
          {activeSlider === "home" && <RenderPage page="home" />}
        </div>
        <div
          id="openinghours"
          className="slider invert"
          onClick={(e) => expand(e, activeSlider, setActiveSlider, navigate)}
          style={{ backgroundColor: "var(--cream)" }}>
          <aside className="sliderTitleContainer">
            <span className="sliderTitle">OPENING HOURS</span>
          </aside>
          {activeSlider === "openinghours" && <RenderPage page="openinghours" />}
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
