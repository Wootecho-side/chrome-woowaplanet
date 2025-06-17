import * as S from './IconButton.style';

interface IconButtonProps {
  size: number;
  name: string;
}

const IconButton = ({ size, name }: IconButtonProps) => {
  return <S.Button size={size} name={name} />;
};

export default IconButton;
