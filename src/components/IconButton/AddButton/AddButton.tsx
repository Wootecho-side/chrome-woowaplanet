import IconButton from "../IconButton";
import type { ButtonProps } from "../ButtonTypes";

const AddButton = ({
  size,
  isClicked,
  onClick,
  isDarkMode,
}: ButtonProps & { isClicked: boolean }) => {
  return (
    <IconButton
      size={size}
      name="add"
      onClick={onClick}
      isDarkMode={isDarkMode}
      whileHover={{ opacity: 0.8, rotate: "5deg" }}
      whileTap={{
        rotate: ["0deg", "-15deg", "0deg"],
        transition: { duration: 0.2 },
      }}
      animate={{ opacity: isClicked ? 0.2 : 0.5 }}
    />
  );
};

export default AddButton;
