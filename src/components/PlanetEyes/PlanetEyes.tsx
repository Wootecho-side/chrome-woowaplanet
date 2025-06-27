export default function PlanetEyes({
  center,
  eyeColor,
}: {
  center: { x: number; y: number };
  eyeColor: string;
}) {
  const eyeOffsetX = 20;
  const eyeOffsetY = -10;

  const centerLeft = {
    x: center.x - eyeOffsetX,
    y: center.y + eyeOffsetY,
  };
  const centerRight = {
    x: center.x + eyeOffsetX,
    y: center.y + eyeOffsetY,
  };

  return (
    <svg viewBox="0 0 300 300" width="200" height="200">
      <g>
        <circle cx={centerLeft.x} cy={centerLeft.y} r="4" fill={eyeColor} />
        <circle cx={centerRight.x} cy={centerRight.y} r="4" fill={eyeColor} />
      </g>
    </svg>
  );
}
