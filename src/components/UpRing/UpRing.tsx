import * as S from "../Ring.styles";

export default function UpRing({
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
        d="M25 100C25 46.5 117.994 36.453 306.552 26C480.654 33.7441 600.5 23.5 596 94.5"
        stroke={isDarkMode ? "#ffffff" : "#000000"}
        strokeWidth="60"
      />

      <path
        d="M25 100C25 46.5 117.994 36.453 306.552 26C480.654 33.7441 600.5 23.5 596 94.5"
        stroke={color}
        strokeWidth="40"
      />
    </S.StyledRing>
  );
}
