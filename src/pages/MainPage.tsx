import { SatelliteData } from "../data/SatelliteData";
import GithubButton from "../components/IconButton/GithubButton/GithubButton";
import OrbitalMoving from "../components/OrbitalMoving/OrbitalMoving";
import Satellite from "../components/Satellite/Satellite";
import Planet from "../components/Planet/Planet";
import Inventory from "../components/Inventory/Inventory";
import styled from "@emotion/styled";
import { useStorageContext } from "../contexts/StorageContext/useStorageContext";
import Shop from "../components/Shop/Shop";
import { useEffect, useRef } from "react";
import { getRandomInteger } from "../utils/getRandom";
import { FREE_TOKEN_RANGE } from "../constants/config";

function MainPage({ isDarkMode }: { isDarkMode: boolean }) {
  const {
    token,
    addToken,
    satelliteList,
    selectedSatelliteId,
    handleSelectedSatelliteId,
    isInitialized,
  } = useStorageContext();

  const hasAddedToken = useRef(false);

  useEffect(() => {
    if (isInitialized && !hasAddedToken.current) {
      addToken(getRandomInteger(FREE_TOKEN_RANGE.MIN, FREE_TOKEN_RANGE.MAX));
      hasAddedToken.current = true;
    }
  }, [isInitialized, addToken]);

  const selectedSatellite = SatelliteData.find(
    (satellite) => satellite.id === selectedSatelliteId
  );

  return (
    <>
      <Header>
        <Shop token={token} isDarkMode={isDarkMode} />
        <GithubButton size={40} isDarkMode={isDarkMode} />
      </Header>
      <Body>
        {selectedSatellite && (
          <OrbitalMoving
            center={{ x: 50, y: 0, zIndex: 13 }}
            radius={{ x: 150, y: 40 }}
            speed={200}
            initialAngle={0}
            initialOrbitRotationAngle={-30}
          >
            <Satellite name={selectedSatellite.name} size={50} />
          </OrbitalMoving>
        )}
        <Planet />
      </Body>
      <Footer>
        <Inventory
          inventory={satelliteList}
          selected={selectedSatelliteId}
          setSelected={handleSelectedSatelliteId}
          isDarkMode={isDarkMode}
        />
      </Footer>
    </>
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

export default MainPage;
