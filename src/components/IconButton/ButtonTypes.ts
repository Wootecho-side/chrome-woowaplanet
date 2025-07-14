import type { motion } from "motion/react";
import type { ComponentProps } from "react";

export interface IconButtonProps extends ComponentProps<typeof motion.button> {
  size: number;
  name: string;
  isDarkMode?: boolean;
}

export interface ButtonProps extends ComponentProps<typeof motion.button> {
  size: number;
  onClick?: () => void;
  isDarkMode?: boolean;
}
