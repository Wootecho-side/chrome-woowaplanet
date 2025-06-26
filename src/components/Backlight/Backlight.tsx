import * as S from "./Backlight.styles";

interface BacklightProps {
  size: number;
  color?: string;
  zIndex?: number;
}

const Backlight = ({ size, color = "#fff", zIndex = 0 }: BacklightProps) => {
  return <S.Container size={size} color={color} zIndex={zIndex} />;
};

export default Backlight;
