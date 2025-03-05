import React from "react";

import img_hero from "../assets/img/img_hero.png";

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
      <div class="rounded md:grid grid-cols-2 grid-rows-1 gap-4 bg-[#fff] h-80 max-w-7xl my-0 mx-auto">
        <div className="flex items-center justify-center p-30 ">
          <p class=" font-bold font-titulos text-primario text-2xl lg:text-4xl">
            Lo mejor de la naturaleza para tu piel y cabello
          </p>
        </div>

        <div className="flex items-center justify-center text-justify px-20 pr-40">
          <p class="py-6 text-texto ">
            Ofrecemos una cuidada selección de productos naturales para el cuidado de la piel, con jabones, cremas y serums faciales que nutren y embellecen de manera suave y efectiva. Además, puedes crear tu propio pack de rutina personalizado con estos tres esenciales.
          </p>
        </div>
      </div>
    </>
  );
};
