import About from "./components/About";
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
    </div>
  );
};

export default App;
