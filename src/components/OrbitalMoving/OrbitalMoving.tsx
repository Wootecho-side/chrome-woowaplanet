import { useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import * as S from "./OrbitalMoving.style";

interface OrbitalMovingProps {
  center: { x: number; y: number; zIndex?: number };
  radius: { x: number; y: number };
  children: React.ReactNode;
  speed?: number; // 초당 회전 속도 (deg/sec)
  initialAngle?: number; // 시작 각도
  initialOrbitRotationAngle?: number; // 타원 기울기 초기 각도 (deg 단위)
  orbitRotationSpeed?: number; // 타원 기울기 변화 속도 (deg/sec)
}

const OrbitalMoving = ({
  center,
  radius,
  children,
  speed = 30,
  initialAngle = 0,
  initialOrbitRotationAngle = 0,
  orbitRotationSpeed = 5,
}: OrbitalMovingProps) => {
  const angle = useMotionValue(initialAngle);
  const rotationAngle = useMotionValue(initialOrbitRotationAngle);

  useAnimationFrame((t, delta) => {
    angle.set(initialAngle + (t / 1000) * speed);
    rotationAngle.set(
      (rotationAngle.get() + (orbitRotationSpeed * delta) / 1000) % 360,
    );
  });

  const rotationRad = useTransform(
    rotationAngle,
    (deg) => (deg * Math.PI) / 180,
  );

  const x = useTransform([angle, rotationRad], ([deg, rotRad]: number[]) => {
    const rad = (deg * Math.PI) / 180;
    return (
      center.x +
      radius.x * Math.cos(rad) * Math.cos(rotRad) -
      radius.y * Math.sin(rad) * Math.sin(rotRad)
    );
  });

  const y = useTransform([angle, rotationRad], ([deg, rotRad]: number[]) => {
    const rad = (deg * Math.PI) / 180;
    return (
      center.y +
      radius.x * Math.cos(rad) * Math.sin(rotRad) +
      radius.y * Math.sin(rad) * Math.cos(rotRad)
    );
  });

  const zIndex = useTransform(angle, (deg) => {
    const normalizedDeg = ((deg % 360) + 360) % 360;
    const centerZIndex = center.zIndex ?? 0;

    return normalizedDeg >= 0 && normalizedDeg <= 180
      ? centerZIndex + 1
      : centerZIndex - 1;
  });

  return <S.Container style={{ x, y, zIndex }}>{children}</S.Container>;
};

export default OrbitalMoving;
