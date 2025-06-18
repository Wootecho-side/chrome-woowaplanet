import * as S from "./Satellite.style";

interface SatelliteProps {
  size: number;
  name: string;
}

const Satellite = ({ size, name }: SatelliteProps) => {
  return (
    <S.Container size={size}>
      <S.BodyImage src={`/satellite/${name}.png`} alt="위성이" />
    </S.Container>
  );
};

export default Satellite;
