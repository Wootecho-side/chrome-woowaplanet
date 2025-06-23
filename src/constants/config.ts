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
} as const;
