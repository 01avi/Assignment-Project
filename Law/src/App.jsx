import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cards from "./components/CardData";
import PracticeAreas from "./components/PracticeAreas";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testmonials";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <Cards />
      <div id="practice">
        <PracticeAreas />
      </div>
      <Testimonials />
      <div id="team">
        <TeamSection />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
