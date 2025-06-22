import * as S from "./IconButton.styles";
import type { IconButtonProps } from "./ButtonTypes";

const IconButton = ({ size, name, isDarkMode, ...rest }: IconButtonProps) => {
  const iconName = isDarkMode ? `${name}-darkMode` : name;

  return (
    <S.Button
      {...rest}
      size={size}
      name={iconName}
      whileHover={rest.disabled ? undefined : rest.whileHover}
    />
  );
};

export default IconButton;
