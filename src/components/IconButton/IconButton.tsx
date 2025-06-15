import type { ButtonHTMLAttributes } from 'react';
import * as S from './IconButton.style';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: number;
  name: string;
}

const IconButton = ({ size, name, ...rest }: IconButtonProps) => {
  return (
    <S.Button size={size} {...rest}>
      {name}
    </S.Button>
  );
};

export default IconButton;
