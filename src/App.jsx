import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./pages/Header";
import SkillSection from "./pages/SkillSection";
import ProjectSection from "./pages/ProjectSection";
import AboutSection from "./pages/AboutSection";
import ExperienceSection from "./pages/ExperienceSection";
import ContactMeForm from "./pages/ContactMeForm";
import { useTheme } from "./assets/ThemeProvider";
import SlideInAnimation from "./components/SlideInAnimation";


function App() {

  const {dark, setDark} = useTheme();

  return (
    <div className="relative">
      <div className={`${!dark ? "image-dark" : "image-light"} -z-10 ${!dark ? "brightness-50" : "brightness-100"} fixed left-0 top-0 overflow-hidden`}></div>
        <Nav />
        
        <SlideInAnimation>
          <Header />
        </SlideInAnimation>

        <SlideInAnimation>
          <SkillSection />
        </SlideInAnimation>

        <SlideInAnimation>
          <ProjectSection />
        </SlideInAnimation>

        <SlideInAnimation>
          <AboutSection />
        </SlideInAnimation>

        <SlideInAnimation>
          <ExperienceSection />
        </SlideInAnimation>

        <SlideInAnimation>
          <ContactMeForm />
        </SlideInAnimation>

        <Footer />
    </div>
  )
}

export default App
