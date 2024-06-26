import "./App.css";
import { Nav } from "./components";
import { LandingPage } from "./components/sections";

const RenderPage = ({ page }: { page?: string | undefined }) => {
  switch (page) {
    case "home":
      return <LandingPage />;

    case "openingHours":
      return <p>Opening</p>;

    case "about":
      return <p>Story</p>;

    case "contact":
      return <p>Contact</p>;

    default:
      return <LandingPage />;
  }
};

const App = ({ page }: { page?: string | undefined }) => {
  return (
    <div className="siteContainer flex col">
      <Nav />
      <RenderPage page={page} />
    </div>
  );
};

export default App;
