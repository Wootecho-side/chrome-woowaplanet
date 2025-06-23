import useSatelliteDraw from "../../../hooks/useSatelliteDraw";
import type { ButtonProps } from "../ButtonTypes";
import IconButton from "../IconButton";

const DiceButton = ({ size, isDarkMode = false }: ButtonProps) => {
  const { canDraw, handleDrawButton } = useSatelliteDraw();

  return (
    <IconButton
      size={size}
      name="dice"
      isDarkMode={isDarkMode}
      disabled={!canDraw}
      onClick={handleDrawButton}
      whileHover={{ opacity: 0.8, rotate: "5deg" }}
      whileTap={{
        rotate: ["0deg", "-15deg", "0deg"],
        transition: { duration: 0.2 },
      }}
    />
  );
};

export default DiceButton;
