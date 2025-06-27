import { Z_INDEX } from "../../constants/zIndex";
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
  zIndex = Z_INDEX.BACKLIGHT,
  style,
}: BacklightProps) => {
  return (
    <S.Container size={size} color={color} zIndex={zIndex} style={style} />
  );
};

export default Backlight;
