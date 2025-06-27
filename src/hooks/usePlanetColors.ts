import { useLayoutEffect, useState } from "react";
import { planetColorThemes } from "../styles/planetColorThemes";
import type { PlanetColors } from "../components/Planet/PlanetTypes";

export default function usePlanetColors(): { colors: PlanetColors } {
  const [colors, setColors] = useState<PlanetColors>({
    name: "기본",
    bodyColor: "#ccc",
    ringColor: "#888",
    eyeColor: "#000",
  });

  useLayoutEffect(() => {
    const getRandomColor = () => {
      return planetColorThemes[
        Math.floor(Math.random() * planetColorThemes.length)
      ];
    };
    setColors(getRandomColor());
  }, []);

  return { colors };
}
