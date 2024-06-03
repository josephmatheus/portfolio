import { AboutSection } from "./components/About";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroBanner";
import ProjectsSection from "./components/Projects";
import { SkillsSection } from "./components/Skills";
import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </>
  );
};

export default App;
