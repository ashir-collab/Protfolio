import Aboutme from "./Sections/Aboutme";
import Experience from "./Sections/Experience";
import Footer from "./Sections/Footer";
import Input from "./common/Input";
import Intro from "./Sections/Intro";
import Project from "./Sections/Project";
import Skills from "./Sections/Skills";
import { Analytics } from "@vercel/analytics/react";
import ChatBot from "./Sections/ChatBot";

function App() {
  return (
    <>
      <div id="intro">
        <Intro />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="input">
        <Input />
      </div>
      <div>
        <ChatBot />
      </div>
      <div>
        <Footer />
      </div>
      <Analytics />
    </>
  );
}

export default App;
