import Planet from "./components/Planet/Planet";
import BackgroundWrapper from "./components/BackgroundWrapper/BackgroundWrapper";
import Inventory from "./components/Inventory/Inventory";
import { useState } from "react";
import type { Satellite } from "./components/Inventory/InventoryTypes";
import DiceButton from "./components/IconButton/DiceButton/DiceButton";
import GithubButton from "./components/IconButton/GithubButton/GithubButton";
import styled from "@emotion/styled";

function App() {
  const [selected, setSelected] = useState<number>(1);

  const inventoryItem: Satellite[] = [
    { id: 1, name: "tomato", rank: "rare", icon: "🍅" },
    { id: 2, name: "earth", rank: "normal", icon: "🌍" },
    { id: 3, name: "flamingo", rank: "rare", icon: "🦩" },
  ];

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
          inventory={inventoryItem}
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
