import "./HomePage.css";
import HeroSection from "../../sections/HeroSection/HeroSection";
import Navbar from "../../assets/components/common/Navbar/Navbar";
import AboutSection from "../../sections/AboutSection/AboutSection";
import ProjectSection from "../../sections/ProjectSection/ProjectSection";
import ContactSection from "../../sections/ContactSection/ContactSection";
import Footer from "../../assets/components/common/Footer/Footer";

function HomePage() {
    return(
        <div className="home-page">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default HomePage;