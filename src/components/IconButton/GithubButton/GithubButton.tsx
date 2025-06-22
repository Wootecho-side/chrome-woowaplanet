import type { ButtonProps } from "../ButtonTypes";
import IconButton from "../IconButton";

const GithubButton = ({ size, isDarkMode }: ButtonProps) => {
  const handleClick = () =>
    window.open("https://github.com/Wootecho-side/chrome-woowaplanet");

  return (
    <IconButton
      size={size}
      name="github"
      isDarkMode={isDarkMode}
      whileHover={{ opacity: 0.8 }}
      onClick={handleClick}
    />
  );
};

export default GithubButton;
