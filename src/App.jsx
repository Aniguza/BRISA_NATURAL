import { react } from "react";

import "./App.css";
import "./index.css";
import { Navbar } from "./componentes/Navbar";
import { Menu } from "./componentes/Menu";
import { Hero } from "./componentes/Hero";  
import { Footer } from "./componentes/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Menu />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
