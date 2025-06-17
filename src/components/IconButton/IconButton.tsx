import * as S from './IconButton.style';
import type { motion } from 'motion/react';
import type { ComponentProps } from 'react';

interface IconButtonProps extends ComponentProps<typeof motion.button> {
  size: number;
  name: string;
}

const IconButton = ({ size, name, ...rest }: IconButtonProps) => {
  console.log(rest.disabled);

  return (
    <S.Button
      {...rest}
      size={size}
      name={name}
      whileHover={rest.disabled ? undefined : rest.whileHover}
    />
  );
};

export default IconButton;
