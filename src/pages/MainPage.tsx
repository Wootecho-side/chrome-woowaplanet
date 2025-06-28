import { SatelliteData } from "../data/SatelliteData";
import GithubButton from "../components/IconButton/GithubButton/GithubButton";
import OrbitalMoving from "../components/OrbitalMoving/OrbitalMoving";
import Satellite from "../components/Satellite/Satellite";
import Planet from "../components/Planet/Planet";
import Inventory from "../components/Inventory/Inventory";
import styled from "@emotion/styled";
import { useStorageContext } from "../contexts/StorageContext/useStorageContext";
import Shop from "../components/Shop/Shop";
import useRefreshAddToken from "../hooks/useRefreshAddToken";
import { BookmarkList } from "../data/BookmarkList";
import Bookmark from "../components/Bookmark/Bookmark";
import usePlanetColors from "../hooks/usePlanetColors";

function MainPage({ isDarkMode }: { isDarkMode: boolean }) {
  const {
    token,
    satelliteList,
    selectedSatelliteId,
    handleSelectedSatelliteId,
  } = useStorageContext();

  useRefreshAddToken();

  const selectedSatellite = SatelliteData.find(
    (satellite) => satellite.id === selectedSatelliteId
  );

  const { colors } = usePlanetColors();

  return (
    <>
      <Header>
        <Bookmark bookmarkList={BookmarkList} isDarkMode={isDarkMode} />
        <Shop token={token} isDarkMode={isDarkMode} />
      </Header>
      <Body>
        <Title isDarkMode={isDarkMode}>{colors.name} 행성이</Title>
        {selectedSatellite && (
          <OrbitalMoving
            center={{ x: 50, y: 0, zIndex: 13 }}
            radius={{ x: 200, y: 80 }}
            speed={100}
            initialAngle={0}
            initialOrbitRotationAngle={-30}
          >
            <Satellite name={selectedSatellite.name} size={80} />
          </OrbitalMoving>
        )}
        <Planet isDarkMode={isDarkMode} colors={colors} />
      </Body>
      <Footer>
        <Inventory
          inventory={satelliteList}
          selected={selectedSatelliteId}
          setSelected={handleSelectedSatelliteId}
          isDarkMode={isDarkMode}
        />
        <GithubButton size={40} isDarkMode={isDarkMode} />
      </Footer>
    </>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
  z-index: 1;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

const Title = styled.h1<{ isDarkMode: boolean }>`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
  font-size: 32px;
  font-weight: medium;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  z-index: 1;
`;

export default MainPage;
