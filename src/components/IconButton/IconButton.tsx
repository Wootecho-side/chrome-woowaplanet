import * as S from "./IconButton.styles";
import type { IconButtonProps } from "./ButtonTypes";
import type { MotionProps } from "motion/react";

const IconButton = ({
  size,
  name,
  isDarkMode,
  animate,
  ...rest
}: IconButtonProps & { animate?: MotionProps["animate"] }) => {
  const iconName = isDarkMode ? `${name}-darkMode` : name;

  return (
    <S.Button
      {...rest}
      disabled={rest.disabled}
      size={size}
      name={iconName}
      whileHover={rest.disabled ? undefined : rest.whileHover}
      animate={animate ?? { opacity: rest.disabled ? 0.2 : 0.5 }}
    />
  );
};

export default IconButton;
