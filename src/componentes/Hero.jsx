import React from "react";

import img_hero from "../assets/img/img_hero.png";

export const Hero = () => {
  return (
    <>
      <div class="rounded md:grid grid-cols-2 grid-rows-1 gap-4 bg-[#F6F6F6] ">
        <div className="flex justify-center">
          <img
            src={img_hero}
            class=" h-auto w-100 rounded-lg "
            alt="Tailwind CSS hero component"
          />
        </div>

        <div className="flex flex-col items-start justify-center p-10 ">
          <p class=" font-bold text-primario  xl:text-2xl lg:text-2xl sm:text-amber-400">
            COSMÉTICA NATURAL Y ORGÁNICA
          </p>
          <p class="py-6 text-texto w-100">
            Descubre el poder de la naturaleza en cada producto. 
            Cuidamos tu piel y el medio ambiente.
          </p>
          <button class="btn bg-butonPrimary text-black">Explorar más</button>
        </div>
      </div>

      
    </>
  );
};
