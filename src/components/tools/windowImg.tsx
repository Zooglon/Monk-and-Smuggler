import img from "../../images/ms_window_outline.png";

interface WindowImgProps {
  inverted?: boolean;
}

export const WindowImg = ({ inverted }: WindowImgProps) => (
  <span className={inverted ? "windowContainer inverted" : "windowContainer"}>
    <img src={img} alt="window outline" />
  </span>
);
