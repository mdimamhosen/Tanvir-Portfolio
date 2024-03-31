import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import EducationAndSkill from "./Components/EducationAndSkill";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="  ">
      <Navbar />
      <HeroSection />
      <About />

      <EducationAndSkill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
