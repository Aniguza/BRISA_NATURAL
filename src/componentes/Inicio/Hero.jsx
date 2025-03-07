import React from "react";

import img_hero from "../../assets/img/img_hero.png";

export const Hero = () => {
  return (
    <>
      {/* Hero Portada */}
      <div class="rounded md:grid grid-cols-2 grid-rows-1 gap-4 bg-[#F6F6F6] ">
        <div className="flex justify-center">
          <img
            src={img_hero}
            class=" h-auto w-100 rounded-lg "
            alt="Tailwind CSS hero component"
          />
        </div>

        <div className="flex flex-col items-start justify-center p-10 ">
          <p class=" font-bold font-titulos text-primario text-2xl lg:text-5xl">
            COSMÉTICA NATURAL Y ORGÁNICA
          </p>
          <p class="py-6 text-texto ">
            Descubre el poder de la naturaleza en cada producto. Cuidamos tu
            piel y el medio ambiente.
          </p>
          <button class="btn bg-butonPrimary text-black">Explorar más</button>
        </div>
      </div>

      {/* Hero Info */}
      <div className="rounded max-w-7xl mx-auto my-10 lg:my-15 overflow-hidden">
        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4">
          {/* Columna del título */}
          <div className="flex items-center justify-center px-12 text-center lg:ml-10 sm:p-8 md:p-10 lg:p-12">
            <h2 className="titulo-estilo">
              Lo mejor de la naturaleza para tu piel y cabello
            </h2>
          </div>

          {/* Columna del texto */}
          <div className="flex items-center justify-center px-10 sm:px-8 md:px-10 lg:px-16 md:pb-0">
            <p className="text-texto text-sm text-justify sm:text-base md:text-base lg:text-lg">
              Ofrecemos una cuidada selección de productos naturales para el cuidado de la piel, con jabones, cremas y serums faciales que nutren y embellecen de manera suave y efectiva. Además, puedes crear tu propio pack de rutina personalizado con estos tres esenciales.
            </p>

          </div>
        </div>
      </div>

      
    </>
  );
};
