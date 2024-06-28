import { useEffect, useRef } from "react";
import { svgLogo } from "../../images/MonkandSmugglerLogoOnBlack";

export const Logo = ({ type, alt }: { type?: string; alt?: string }) => {
  const image = svgLogo;

  const useApp = (image: string) => {
    const svgWrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      // @ts-ignore
      svgWrapperRef.current.innerHTML = image;
    }, [image]);
    return {
      svgWrapperRef,
    };
  };

  //   const { svgWrapperRef } = useApp(image);
  return svgLogo;
};
