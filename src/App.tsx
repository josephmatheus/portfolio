import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroBanner";
import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
    </>
  );
};

export default App;
