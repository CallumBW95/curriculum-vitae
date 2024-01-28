// Components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Hobbies from "./components/Hobbies";
import ContactForm from "./components/ContactForm";

// Data
import { EventsData } from "./data/event";
import { ProjectsData } from "./data/projects";
import { SkillData, SoftSkillData } from "./data/skills";

// Assets
import "./styles/index.scss";

function App() {
  return (
    <main>
      <Navigation />
      <Header />
      <Ticker />
      <About />
      <Portfolio projectsData={ProjectsData} />
      <Skills skillData={SkillData} softSkillData={SoftSkillData} />
      <Hobbies />
      <Timeline eventsData={EventsData} />
      <ContactForm />
    </main>
  );
}

export default App;
