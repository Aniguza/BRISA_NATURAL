import React from "react";

import img_hero from "../../assets/img/img_hero.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      {/* Hero Portada */}
      <div className="rounded md:grid grid-cols-2 grid-rows-1 gap-4 bg-white h-100 overflow-hidden">
        <div 
          className="w-full h-100"
        >
          <div className="h-100 bg-cover bg-[url('assets/img/img_hero.png')] bg-position-[center_top_-21rem]"></div>
        </div>

        <div className="flex flex-col items-start justify-center p-10 ">
          <p className=" font-lale text-primario text-2xl lg:text-5xl">
            COSMÉTICA NATURAL Y ORGÁNICA
          </p>
          <p className="py-6 pr-20 text-texto font-rale text-xl">
            Descubre el poder de la naturaleza en cada producto. Cuidamos tu
            piel y el medio ambiente.
          </p>
          <button className="btn bg-butonPrimary text-texto font-rale text-xs border-none shadow-md hover:bg-butonPrimary/75">
          <Link to="/Tienda" className="hover_menu  ">Conóce lo Natural</Link></button>
        </div>
      </div>
      {/* Hero Info */}
      <div className="flex rounded max-w-7xl mx-auto mb-10 lg:mb-15 overflow-hidden bg-gray-bg shadow-sm h-70 items-center">
        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4">
          {/* Columna del título */}
          <div className="flex items-center justify-center px-12 text-center lg:ml-10 sm:p-8 md:p-10 lg:p-12">
            <h2 className="titulo-estilo">
              Lo mejor de la naturaleza para tu piel y cabello
            </h2>
          </div>

          {/* Columna del texto */}
          <div className="flex items-center justify-center px-10 sm:px-8 md:px-10 lg:px-16 md:pb-0">
            <p className="text-texto font-rale text-sm text-justify sm:text-base md:text-base lg:text-lg">
              Ofrecemos una cuidada selección de productos naturales para el cuidado de la piel, con jabones, cremas y serums faciales que nutren y embellecen de manera suave y efectiva. Además, puedes crear tu propio pack de rutina personalizado con estos tres esenciales.
            </p>

          </div>
        </div>
      </div>

      
    </>
  );
};
