import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
