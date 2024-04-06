import { AboutSection } from "./components/About";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroBanner";
import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default App;
