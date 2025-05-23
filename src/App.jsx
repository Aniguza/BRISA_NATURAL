import ScrollToTop from "./componentes/ScrollToTop";

import "animate.css";
import { CartProvider } from "./componentes/Tienda/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import { Navbar } from "./componentes/Navbar";
import { Inicio } from "./componentes/Inicio";
import { Footer } from "./componentes/Footer";

import { Conocenos } from "./componentes/Conocenos";
import { Tienda } from "./componentes/Tienda";
import { DetalleProducto } from "./componentes/Productos/DetalleProducto";
import { Blog } from "./componentes/Blog";
import { Contacto } from "./componentes/Contacto";
import { Carrito } from "./componentes/Tienda/Carrito";
import { Login } from "./componentes/Login";
// ...
<Route path="/login" element={<Login />} />


import { AuthProvider } from "./componentes/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="animate__animated animate__fadeIn animate__slow">
            <Navbar />
            <div className="mt-18 md:mt-28">
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Carrito" element={<Carrito />} />
                <Route path="/conocenos" element={<Conocenos />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/producto/:sku" element={<DetalleProducto />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
