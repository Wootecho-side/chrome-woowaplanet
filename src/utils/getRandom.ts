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
