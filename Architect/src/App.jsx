import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Componants/Navbar";
import HeroSection from "./Componants/HeroSection";
import SearchBar from "./Componants/SearchBar";
import ConnectSection from "./Componants/ConnectionSection";
import FeedbackForm from "./Componants/FeedbackForm";
import ArchitectProfiles from "./Componants/ArchitectProfile";
import Newsletter from "./Componants/Newsletter";
import Footer from "./Componants/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about-us">
        <SearchBar />
      </div>
      <div id="architects">
        <ConnectSection />
        <ArchitectProfiles />
      </div>
      <div id="contact">
        <FeedbackForm />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
