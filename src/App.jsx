import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Master from "./components/Master";
import Portrfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Master />
      <Portrfolio />
      <Footer />
    </>
  );
}

export default App;
