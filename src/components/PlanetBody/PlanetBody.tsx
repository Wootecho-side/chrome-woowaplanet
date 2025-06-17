import PlanetEyes from "../PlanetEyes/PlanetEyes";
import { motion } from "motion/react";

export default function PlanetBody({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) {
  const bodyCenter = { x: 65, y: 65 };
  const bodyRadius = 57;

  const dx = mousePosition.x - bodyCenter.x;
  const dy = mousePosition.y - bodyCenter.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const isInsideBody = distance <= bodyRadius;

  const effectiveMousePos = isInsideBody ? null : mousePosition;
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
        <PlanetEyes mousePosition={effectiveMousePos} />
        <circle cx="62" cy="72" r="2" fill="#333" />
      </svg>
    </motion.div>
  );
}
