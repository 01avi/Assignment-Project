import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutUs from "./Components/AboutUs";
import Projects from "./Components/Projects";
import WhatWeDo from "./Components/WhatWeDo";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="services">
        <WhatWeDo />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default App;
