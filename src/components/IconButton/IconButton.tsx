import * as S from "./IconButton.style";
import type { IconButtonProps } from "./ButtonTypes";

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
