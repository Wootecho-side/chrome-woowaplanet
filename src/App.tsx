import BackgroundWrapper from "./components/BackgroundWrapper/BackgroundWrapper";
import { StorageProvider } from "./contexts/StorageContext/StorageProvider";
import { useDarkMode } from "./hooks/useDarkMode";
import MainPage from "./pages/MainPage";

function App() {
  const isDarkMode = useDarkMode();

  return (
    <StorageProvider>
      <BackgroundWrapper isDarkMode={isDarkMode}>
        <MainPage isDarkMode={isDarkMode} />
      </BackgroundWrapper>
    </StorageProvider>
  );
}

export default App;
