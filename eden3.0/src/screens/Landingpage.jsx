import AboutPage from "./About.Page";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";



function LandingPage() {
    return (
        <div className="w-full h-full overflow-y-scroll scroll-smooth">
            <HeroSection />
            <AboutPage></AboutPage>
            <Footer />
        </div>
    );
}

export default LandingPage;
		

