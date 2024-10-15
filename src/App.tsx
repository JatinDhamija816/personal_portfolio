import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
    </div>
  );
};

export default App;
