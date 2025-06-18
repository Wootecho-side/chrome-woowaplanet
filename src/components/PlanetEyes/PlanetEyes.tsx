export default function PlanetEyes({
  mousePosition,
  center,
}: {
  mousePosition: { x: number; y: number } | null;
  center: { x: number; y: number };
}) {
  const radius = 7;

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

  const calcOffset = ({
    eyeCenter,
  }: {
    eyeCenter: { x: number; y: number };
  }) => {
    if (!mousePosition) return { x: 0, y: 0 };

    const dx = mousePosition.x - eyeCenter.x;
    const dy = mousePosition.y - eyeCenter.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 1) return { x: 0, y: 0 };

    const scale = Math.min(radius / distance, 1);
    return {
      x: dx * scale,
      y: dy * scale,
    };
  };

  const leftOffset = calcOffset({ eyeCenter: centerLeft });
  const rightOffset = calcOffset({ eyeCenter: centerRight });

  return (
    <g>
      <circle
        cx={centerLeft.x + leftOffset.x}
        cy={centerLeft.y + leftOffset.y}
        r="4"
        fill="black"
      />
      <circle
        cx={centerRight.x + rightOffset.x}
        cy={centerRight.y + rightOffset.y}
        r="4"
        fill="black"
      />
    </g>
  );
}
