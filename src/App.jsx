import { react } from "react";

import "./App.css";
import "./index.css";
import { Navbar } from "./componentes/Navbar";
import { Menu } from "./componentes/Menu";
import { Hero } from "./componentes/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Menu />
      <Hero />
    </>
  );
}

export default App;
