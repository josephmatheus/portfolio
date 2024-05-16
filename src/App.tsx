import { AboutSection } from "./components/About";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroBanner";
import ProjectsSection from "./components/Projects";
import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </>
  );
};

export default App;
