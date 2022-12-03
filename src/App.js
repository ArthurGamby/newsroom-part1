import { ThemeProvider } from "styled-components";
import { COLORS, FONTS } from "./theme";
import { Navbar } from "./components/Navbar";
import { WebsiteLogo } from "./components/WebsiteLogo";

function App() {
  return (
    <ThemeProvider theme={{ colors: COLORS, fonts: FONTS }}>
      <WebsiteLogo />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
