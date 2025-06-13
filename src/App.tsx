import './App.css';
import { motion } from 'motion/react';

function App() {
  return (
    <>
      <motion.div style={{ background: '#ff0088' }} animate={{ rotate: 360 }}>
        회전 확인
      </motion.div>
    </>
  );
}

export default App;
