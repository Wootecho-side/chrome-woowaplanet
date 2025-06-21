import * as S from "./IconButton.styles";
import type { IconButtonProps } from "./ButtonTypes";
import { useDarkMode } from "../../hooks/useDarkMode";

const IconButton = ({ size, name, ...rest }: IconButtonProps) => {
  const isDarkMode = useDarkMode();
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
