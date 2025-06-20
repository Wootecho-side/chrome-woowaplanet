import * as S from "./PlanetBody.styles";
import PlanetEyes from "../PlanetEyes/PlanetEyes";
import { useRef, useState } from "react";

export default function PlanetBody() {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const bodyCenter = { x: 150, y: 150 };
  const bodyRadius = 100;

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;

    const svgPoint = svgRef.current.createSVGPoint();
    svgPoint.x = e.clientX;
    svgPoint.y = e.clientY;

    const transformedPoint = svgPoint.matrixTransform(
      svgRef.current.getScreenCTM()?.inverse()
    );
    const dx = transformedPoint.x - bodyCenter.x;
    const dy = transformedPoint.y - bodyCenter.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    setMousePosition(
      distance <= bodyRadius
        ? null
        : { x: transformedPoint.x, y: transformedPoint.y }
    );
  };
  return (
    <S.PlanetBodyWrapper>
      <svg
        viewBox="0 0 300 300"
        width="200"
        height="200"
        ref={svgRef}
        onMouseMove={handleMouseMove}
      >
        <defs>
          <filter
            id="hand-drawn-outline"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            primitiveUnits="userSpaceOnUse"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="3"
              seed="5"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="6"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <circle
          cx="150"
          cy="150"
          r="100"
          fill="#fff1b7"
          stroke="#000000"
          strokeWidth="4"
          filter="url(#hand-drawn-outline)"
        />
        <PlanetEyes mousePosition={mousePosition} center={{ x: 150, y: 150 }} />
        <circle cx="150" cy="160" r="4" fill="#333" />
      </svg>
    </S.PlanetBodyWrapper>
  );
}
