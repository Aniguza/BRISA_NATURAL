import { react } from "react";
import 'animate.css';

import "./App.css";
import "./index.css";
import { Navbar } from "./componentes/Navbar";
import { Inicio } from "./Inicio";
import { Footer } from "./componentes/Footer";

function App() {
  return (
    <div className="animate__animated animate__fadeIn animate__slow">
      <Navbar />
      <Inicio />
      <Footer />
    </div>
  );
}

export default App;
