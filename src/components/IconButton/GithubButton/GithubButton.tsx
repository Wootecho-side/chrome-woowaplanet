import type { ButtonProps } from '../ButtonTypes';
import IconButton from '../IconButton';

const GithubButton = ({ size }: ButtonProps) => {
  const handleClick = () => window.open('https://github.com/Wootecho-side/chrome-woowaplanet');

  return (
    <IconButton size={size} name="github" whileHover={{ opacity: 0.8 }} onClick={handleClick} />
  );
};

export default GithubButton;
