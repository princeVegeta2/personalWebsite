import './App.css';
import Navbar from './components/common/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
// import ApiSection from './components/sections/ApiSection';
import ContactSection from './components/sections/ContactSection';
import FooterSection from './components/sections/FooterSection';

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    {/*<ApiSection />*/}
    <ContactSection />
    <FooterSection />
    </>
  );
}

export default App;
