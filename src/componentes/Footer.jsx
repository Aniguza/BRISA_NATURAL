import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <>
      <footer className="footer footer-horizontal footer-center rounded p-10 bg-icons">
        <h1 className="font-bold  text-2xl text-tfooter">
          ENTÉRATE MÁS EN NUESTRAS REDES SOCIALES
        </h1>
        <nav>
          <div className="grid grid-flow-col gap-10 text-tfooter">
            <a>
              <FontAwesomeIcon
                icon={faFacebookF}
                size="2x"
                color="#ffead7"
                className=" hover:animate-bounce "
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faTiktok}
                size="2x"
                color="#ffead7"
                className=" hover:animate-bounce "
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                color="#ffead7"
                className=" hover:animate-bounce "
              />
            </a>
          </div>
        </nav>
        <nav className="grid grid-flow-col gap-8 text-tfooter">
          <a className="link link-hover">INICIO</a>
          <a className="link link-hover">CONÓCENOS</a>
          <a className="link link-hover">TIENDA</a>
          <a className="link link-hover">BLOG</a>
          <a className="link link-hover">CONTÁCTANOS</a>
        </nav>
      </footer>
      <aside className="bg-black w-full h-10 text-tfooter text-[12px] flex items-center justify-center">
        <p>
          Copyright © {new Date().getFullYear()} - APYtech. All rights reserved.
        </p>
      </aside>
    </>
  );
};
