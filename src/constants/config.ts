import type { Bookmark } from "../components/Bookmark/BookmarkTypes";
import { BookmarkList } from "../data/BookmarkList";

export const DRAW_PRICE = 200;
export const RARE_CHANCE = 0.05;
export const FREE_TOKEN_RANGE = {
  MIN: 3,
  MAX: 5,
} as const;

export const INIT_VALUE = {
  TOKEN: 0,
  SATELLITE_ID_LIST: [1] as number[],
  SELECTED_SATELLITE_ID: 1,
  BOOKMARK_LIST: BookmarkList as Bookmark[],
} as const;

export const BACKGROUND_COLOR = {
  LIGHT: ["#A9B5DF", "#D6E5FA", "#BFD7ED", "#E3F2FD", "#D0E8FF"],
  DARK: ["#001427", "#000B14", "#0B1D3A", "#1A2B4C", "#14213D"],
} as const;
