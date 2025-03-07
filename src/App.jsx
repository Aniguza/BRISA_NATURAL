import React from "react";
import "animate.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";
import "./index.css";
import { Navbar } from "./componentes/Navbar";
import { Menu } from "./componentes/Menu";
import { Inicio } from "./componentes/Inicio";
import { Footer } from "./componentes/Footer";

import { Conocenos }from "./componentes/Conocenos";
import { Tienda } from "./componentes/Tienda";
import { Blog } from "./componentes/Blog";
import { Contacto } from "./componentes/Contacto";

function App() {
  return (
    <Router>
      <div className="animate__animated animate__fadeIn animate__slow">
        <Navbar />
        <div className="mt-18 md:mt-0">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
