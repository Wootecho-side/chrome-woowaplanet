import { useState } from "react";

const useEyeMoving = (
  outerRef: React.RefObject<HTMLDivElement | null>,
  size: number,
  innerSafeSize: number,
  maxMovingValue: number
) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!outerRef.current) return;

    const rect = outerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = size / 2;
    const centerY = size / 2;

    const dx = x - centerX;
    const dy = y - centerY;

    const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
    const safeRadius = innerSafeSize / 2;

    if (distanceFromCenter <= safeRadius) {
      setOffset({ x: 0, y: 0 });
      return;
    }

    const ratio = Math.min(1, maxMovingValue / distanceFromCenter);
    setOffset({ x: dx * ratio, y: dy * ratio });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return { offset, handleMouseMove, handleMouseLeave };
};

export default useEyeMoving;
