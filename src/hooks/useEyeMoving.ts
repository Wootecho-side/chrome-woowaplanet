import { useMotionValue, useSpring } from "framer-motion";

const useEyeMoving = (
  outerRef: React.RefObject<HTMLDivElement | null>,
  size: number,
  innerSafeSize: number,
  maxMovingValue: number
) => {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springX = useSpring(rawX, { stiffness: 300, damping: 30 });
  const springY = useSpring(rawY, { stiffness: 300, damping: 30 });

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
      rawX.set(0);
      rawY.set(0);
      return;
    }

    const ratio = Math.min(1, maxMovingValue / distanceFromCenter);
    rawX.set(dx * ratio);
    rawY.set(dy * ratio);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return {
    offset: { x: springX, y: springY },
    handleMouseMove,
    handleMouseLeave,
  };
};

export default useEyeMoving;
