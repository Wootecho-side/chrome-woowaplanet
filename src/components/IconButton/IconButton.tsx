import * as S from "./IconButton.styles";
import type { IconButtonProps } from "./ButtonTypes";

const IconButton = ({ size, name, isDarkMode, ...rest }: IconButtonProps) => {
  const iconName = isDarkMode ? `${name}-darkMode` : name;

  return (
    <S.Button
      {...rest}
      disabled={rest.disabled}
      size={size}
      name={iconName}
      whileHover={rest.disabled ? undefined : rest.whileHover}
      animate={{ opacity: rest.disabled ? 0.2 : 0.5 }}
    />
  );
};

export default IconButton;
