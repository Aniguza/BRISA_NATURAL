import React from "react"
import Hero from '../../assets/img/img_historia.png'

export const Hero_conocenos = () => {
  return (
    <div className="hero bg-extra h-full py-3 md:p-10 lg:px-45 lg:py-15 xl:px-70">
      <div className="hero-content flex-row-reverse md:gap-7">
        <div>
        <img
          src={Hero}
          className="w-sm pr-4 md:w-6xl"
        />
        </div>
        <div className="pl-5 pr-3">
          <h1 className="text-xs font-lale text-secondario md:text-lg lg:text-2xl">NUESTRA HISTORIA</h1>
          <p className="py-3 text-justify text-[8px] leading-3 text-texto font-rale texto_cono">
            Desde nuestros primeros jabones artesanales hasta nuestros serums y cremas, cada fórmula está elaborada con aceites, extractos y esencias provenientes de la biodiversidad peruana. Usamos insumos como aloe vera, miel, aceites esenciales y mantecas naturales, asegurando que cada producto sea un regalo para tu piel. <br /><br />
            Hoy, seguimos creciendo con el mismo compromiso: ofrecer belleza consciente, sostenible y 100% natural, llevando lo mejor de Piura a cada rincón del país.
          </p>
          
        </div>
      </div>
    </div>
  );
};
