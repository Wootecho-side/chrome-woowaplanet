export const getRandom = (seed?: number): number => {
  if (seed === undefined) {
    return Math.random();
  }

  let x = seed | 0;

  x ^= x << 13;
  x ^= x >>> 17;
  x ^= x << 5;

  return (x >>> 0) / 0xffffffff;
};

export const getRandomInteger = (
  min: number,
  max: number,
  seed?: number
): number => {
  const random = getRandom(seed);
  return Math.floor(random * (max - min + 1)) + min;
};
