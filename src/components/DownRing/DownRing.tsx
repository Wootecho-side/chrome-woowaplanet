import * as S from "../Ring.styles";

export default function DownRing({
  color,
  isDarkMode,
}: {
  color: string;
  isDarkMode?: boolean;
}) {
  return (
    <S.StyledRing
      xmlns="http://www.w3.org/2000/svg"
      width="370"
      height="120"
      viewBox="-30 0 713 137"
      fill="none"
      ringColor={color}
    >
      <path
        d="M25 8C24.9995 63.5 150.147 99.8322 304.552 111C489.46 106.265 591 73.5 596 2"
        stroke={isDarkMode ? "#ffffff" : "#000000"}
        strokeWidth="60"
      />
      <path
        d="M25 8C24.9995 63.5 150.147 99.8322 304.552 111C489.46 106.265 591 73.5 596 2"
        stroke={color}
        strokeWidth="40"
      />
    </S.StyledRing>
  );
}
