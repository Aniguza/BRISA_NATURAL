import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Menu } from "./Menu";

export const Footer = () => {
  return (
    <>
      <footer className="footer p-6 sm:p-8 md:p-10 bg-icons rounded">
        <div className="container mx-auto flex flex-col items-center space-y-6 md:space-y-8">
          {/* Título */}
          <h1 className="font-bold text-center text-lg sm:text-xl md:text-2xl text-tfooter px-2">
            ENTÉRATE MÁS EN NUESTRAS REDES SOCIALES
          </h1>

          {/* Iconos de redes sociales */}
          <nav className="w-full">
            <div className="flex justify-center gap-6 sm:gap-8 md:gap-10 text-tfooter">
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

          {/* Links de navegación */}
          <nav className="w-full">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-tfooter text-xs sm:text-sm md:text-base">
              <Menu />
              
            </div>
          </nav>
        </div>
      </footer>

      {/* Copyright */}
      <aside className="bg-black w-full py-2 sm:py-3 md:h-10 text-tfooter text-[10px] sm:text-[12px] flex items-center justify-center px-2">
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - APYtech. All rights reserved.
        </p>
      </aside>
    </>
  );
};
