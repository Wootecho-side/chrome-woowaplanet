export default function PlanetEyes({
  mousePosition,
}: {
  mousePosition: { x: number; y: number } | null;
}) {
  const centerLeft = { x: 55, y: 60 };
  const centerRight = { x: 75, y: 60 };
  const radius = 5;

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
        r="2"
        fill="black"
      />

      <circle
        cx={centerRight.x + rightOffset.x}
        cy={centerRight.y + rightOffset.y}
        r="2"
        fill="black"
      />
    </g>
  );
}
