import PlanetEyes from "../PlanetEyes/PlanetEyes";
import { motion } from "motion/react";

export default function PlanetBody({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) {
  return (
    <motion.div>
      <svg viewBox="0 0 200 200" width="300" height="300">
        <defs>
          <filter id="wavy-line">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="1"
              result="turbulence"
            />
            <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="4" />
          </filter>
        </defs>

        <circle cx="65" cy="65" r="57" fill="#fff1b7" />
        <PlanetEyes mousePosition={mousePosition} />
        <circle cx="62" cy="72" r="2" fill="#333" />
      </svg>
    </motion.div>
  );
}
