import { svgLogo } from "../../images/MonkandSmugglerLogoOnBlack";
import img from "../../images/MonkandSmugglerLogoOnBlack.png";

export const Logo = ({ type, alt }: { type?: string; alt?: string }) =>
  type && type === "png" ? (
    <img src={img} alt="Monk & Smuggler logo" style={{ maxWidth: "100%" }} />
  ) : type === "svg" ? (
    svgLogo
  ) : (
    <></>
  );
