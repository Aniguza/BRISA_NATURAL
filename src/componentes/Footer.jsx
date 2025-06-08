import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Menu } from "./Menu";
import { Link } from "react-router-dom";

import libro from "../assets/img/libro_recl.jpg";

export const Footer = () => {
  return (
    <>
      <footer className="footer w-full bg-icons sm:footer-horizontal py-16 px-10 lg:px-90 font-rale items-center text-tfooter">
        <nav>
          <div className="flex flex-col gap-5">
            <a className="link link-hover"><Link to="/" >Inicio</Link></a>
            <a className="link link-hover"><Link to="/Conocenos">Conócenos</Link></a>
            <a className="link link-hover"><Link to="/Tienda">Tienda</Link></a>
            <a className="link link-hover"><Link to="/Blog">Blog</Link></a>
            <a className="link link-hover"><Link to="/Contacto">Contacto</Link></a>
          </div>
          
        </nav>
        <nav>
          <div className="flex flex-col gap-5">
          <a className="link link-hover">¿Cómo comprar?</a>
          <a className="link link-hover">Términos y condiciones</a>
          <a className="link link-hover">Cambios y devoluciones</a>
          <a className="link link-hover">Privacidad de datos</a></div>
        </nav>
        <nav>
          <img src={libro} alt="Libro_reclamaciones" className="w-30" />
          <h6 className="footer-title mt-8">Social</h6>
          <div className="grid grid-flow-col gap-7">
            <a className="transition-transform duration-300 hover:animate-bounce">
              <FontAwesomeIcon
                icon={faFacebookF}
                size="xl"
                className="redes"
                color="#ffead7"
              />
            </a>
            <a className="transition-transform duration-300 hover:animate-bounce">
              <FontAwesomeIcon
                icon={faTiktok}
                size="xl"
                className="redes"
                color="#ffead7"
              />
            </a>
            <a className="transition-transform duration-300 hover:animate-bounce">
              <FontAwesomeIcon
                icon={faInstagram}
                size="xl"
                className="redes"
                color="#ffead7"
              />
            </a>
          </div>
        </nav>

        {/* Copyright */}
      </footer>
      <aside className="bg-black w-full py-2 sm:py-3 md:h-10 text-tfooter text-[10px] sm:text-[14px] flex items-center justify-center px-2 fuente-lale">
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - APYtech. All rights reserved.
        </p>
      </aside>
    </>
  );
};
