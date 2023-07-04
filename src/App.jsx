import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Darslar from "./components/Darslar";
import Master from "./components/Master";
import Portrfolio from "./components/Portfolio";

import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Darslar />
      <Master />
      <Portrfolio />
      <Navbar />
    </>
  );
}

export default App;
