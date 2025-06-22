import Planet from "./components/Planet/Planet";
import BackgroundWrapper from "./components/BackgroundWrapper/BackgroundWrapper";
import Inventory from "./components/Inventory/Inventory";
import { useState } from "react";
import DiceButton from "./components/IconButton/DiceButton/DiceButton";
import GithubButton from "./components/IconButton/GithubButton/GithubButton";
import styled from "@emotion/styled";
import { SatelliteData } from "./data/SatelliteData";

function App() {
  const [selected, setSelected] = useState<number>(1);

  return (
    <BackgroundWrapper>
      <Header>
        <DiceButton size={40} />
        <GithubButton size={40} />
      </Header>
      <Body>
        <Planet />
      </Body>
      <Footer>
        <Inventory
          inventory={SatelliteData}
          selected={selected}
          setSelected={setSelected}
        />
      </Footer>
    </BackgroundWrapper>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  z-index: 10;
  box-sizing: border-box;
  flex: 1;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
  z-index: 10;
  flex: 1;
  padding: 0 16px;
`;

export default App;
