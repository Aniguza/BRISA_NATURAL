import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Menu } from "./Menu";

import libro from "../assets/img/libro_recl.jpg";

export const Footer = () => {
  return (
    <>
      <footer className="footer w-full bg-icons sm:footer-horizontal py-10 px-10 lg:px-90  font-rale items-center text-tfooter">
        <nav>
          <h6 className="footer-title">Enlaces</h6>
          <div className="flex flex-col gap-5"><Menu /></div>
          
        </nav>
        <nav>
          <h6 className="footer-title">Ayuda y Soporte</h6>
          <div className="flex flex-col gap-5">
          <a className="link link-hover">¿Cómo comprar?</a>
          <a className="link link-hover">Términos y condiciones</a>
          <a className="link link-hover">Cambios y devoluciones</a>
          <a className="link link-hover">Privacidad de datos</a></div>
        </nav>
        <nav>
          <img src={libro} alt="Libro_reclamaciones" className="w-30" />
          <h6 className="footer-title mt-8">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a className="transition-transform duration-300 hover:animate-bounce">
              <FontAwesomeIcon
                icon={faFacebookF}
                size="lg"
                className="sm:text-xl md:text-2xl"
                color="#ffead7"
              />
            </a>
            <a className="transition-transform duration-300 hover:animate-bounce">
              <FontAwesomeIcon
                icon={faTiktok}
                size="lg"
                className="sm:text-xl md:text-2xl"
                color="#ffead7"
              />
            </a>
            <a className="transition-transform duration-300 hover:animate-bounce">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="sm:text-xl md:text-2xl"
                color="#ffead7"
              />
            </a>
          </div>
        </nav>

        {/* Copyright */}
      </footer>
      <aside className="bg-black w-full py-2 sm:py-3 md:h-10 text-tfooter text-[10px] sm:text-[17px] flex items-center justify-center px-2 fuente-lale">
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - APYtech. All rights reserved.
        </p>
      </aside>
    </>
  );
};
