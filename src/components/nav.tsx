import { useState } from "react";

export const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav id="ms_mobile_nav" className="ms_nav flex col">
      {showNav ? (
        <>
          <div className="flex row between p-3">
            <aside className="ms_nav--aside">
              <p style={{ animationDelay: "0.5s" }}>Hello Stafford.</p>
              <p style={{ animationDelay: "1.5s" }}>You are loved.</p>
              <p style={{ animationDelay: "2.5s" }}>You are welcome here.</p>
            </aside>
            <button onClick={() => setShowNav(false)} className="ms_nav--Btn ms_Btn flex col gap-s">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <ul className="ms_nav--container">
            <li className="ms_nav--menu-item">
              <a href="/" onClick={() => setShowNav(false)}>
                <span className="ms_nav--bean"></span>
                <p>MONK & SMUGGLER</p>
              </a>
            </li>
            <li className="ms_nav--menu-item">
              <a href="/openinghours" onClick={() => setShowNav(false)}>
                <span className="ms_nav--bean"></span>
                <p>OPENING HOURS</p>
              </a>
            </li>
            <li className="ms_nav--menu-item">
              <a href="/our-story" onClick={() => setShowNav(false)}>
                <span className="ms_nav--bean"></span>
                <p>OUR STORY</p>
              </a>
            </li>
            <li className="ms_nav--menu-item">
              <a href="/contact">
                <span className="ms_nav--bean"></span>
                <p>GET IN TOUCH</p>
              </a>
            </li>
          </ul>
        </>
      ) : (
        <button
          onClick={() => setShowNav(true)}
          className="ms_nav--Btn ms_Btn flex col gap-s closedNav"
          style={{ position: "absolute" }}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
    </nav>
  );
};
