import Backlight from "../Backlight/Backlight";
import * as S from "./Satellite.styles";

interface SatelliteProps {
  size: number;
  name: string;
}

const Satellite = ({ size, name }: SatelliteProps) => {
  return (
    <S.Container size={size}>
      <S.BodyImage src={`/satellite/${name}.png`} alt="위성이" />
      <Backlight size={size} zIndex={-1} style={{ opacity: 0.4 }} />
    </S.Container>
  );
};

export default Satellite;
