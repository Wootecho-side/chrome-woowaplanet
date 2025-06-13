import styled from '@emotion/styled';
import './App.css';
import { motion } from 'motion/react';

function App() {
  return (
    <>
      <S.Container animate={{ rotate: 360 }}>회전 확인</S.Container>
    </>
  );
}

export default App;

const S = {
  Container: styled(motion.div)`
    background-color: #ff0088;
  `,
};
