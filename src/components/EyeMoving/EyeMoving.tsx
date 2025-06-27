import { useRef } from "react";
import * as S from "./EyeMoving.styles";
import useEyeMoving from "../../hooks/useEyeMoving";

interface EyeMovingProps {
  size: number;
  innerSafeSize?: number;
  maxMovingValue?: number;
  showRecognitionZone?: boolean;
  children: React.ReactNode;
}

const EyeMoving = ({
  size,
  innerSafeSize = 0,
  maxMovingValue = 10,
  showRecognitionZone = false,
  children,
}: EyeMovingProps) => {
  const outerRef = useRef<HTMLDivElement>(null);

  const { offset, handleMouseMove, handleMouseLeave } = useEyeMoving(
    outerRef,
    size,
    innerSafeSize,
    maxMovingValue
  );

  return (
    <S.OuterContainer
      size={size}
      showRecognitionZone={showRecognitionZone}
      ref={outerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <S.MovingContainer>
        {showRecognitionZone && <S.InnerRecognitionZone size={innerSafeSize} />}
        <S.AnimationContent style={{ x: offset.x, y: offset.y }}>
          {children}
        </S.AnimationContent>
      </S.MovingContainer>
    </S.OuterContainer>
  );
};

export default EyeMoving;
