import * as S from "./PlanetBody.styles";

interface PlanetBodyProps {
  bodyColor?: string;
  eyeColor?: string;
  isDarkMode?: boolean;
}

export default function PlanetBody({
  bodyColor = "#fff1b7",
  eyeColor = "#000",
  isDarkMode = false,
}: PlanetBodyProps) {
  return (
    <S.PlanetBodyWrapper>
      <svg viewBox="0 0 300 300" width="300" height="300">
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
              scale="4"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <circle
          cx="150"
          cy="150"
          r="120"
          fill={bodyColor}
          stroke={isDarkMode ? "#ffffff" : "#000000"}
          strokeWidth="5"
          filter="url(#hand-drawn-outline)"
        />
        <circle cx="150" cy="170" r="5" fill={eyeColor} />
      </svg>
    </S.PlanetBodyWrapper>
  );
}
