import * as S from "./Backlight.styles";

interface BacklightProps {
  size: number;
  color?: string;
  zIndex?: number;
  style?: React.CSSProperties;
}

const Backlight = ({
  size,
  color = "#fff",
  zIndex = 0,
  style,
}: BacklightProps) => {
  return (
    <S.Container size={size} color={color} zIndex={zIndex} style={style} />
  );
};

export default Backlight;
