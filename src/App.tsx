import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
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
    </div>
  );
};

export default App;
