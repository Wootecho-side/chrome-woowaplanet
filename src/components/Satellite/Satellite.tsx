import * as S from './Satellite.style';

interface SatelliteProps {
  size: number;
  name: string;
}

const Satellite = ({ size, name }: SatelliteProps) => {
  return (
    <S.Container size={size}>
      <p>{name}</p>
    </S.Container>
  );
};

export default Satellite;
