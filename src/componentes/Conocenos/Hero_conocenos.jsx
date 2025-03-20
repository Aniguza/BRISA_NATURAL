import React from "react";
import Hero from "../../assets/img/img_historia.png";

export const Hero_conocenos = () => {
  return (
    <div className="hero bg-extra h-full py-3 md:p-10 lg:px-45 lg:py-15 xl:px-40">
      <div className="hero-content flex-row-reverse md:gap-7">
        <div>
          <img src={Hero} className="hidden md:flex w-sm md:pr-4 md:w-6xl" />
        </div>
        <div className="pl-3 pr-3">
          <h1 className="text-xl font-lale text-secondario md:text-lg lg:text-2xl">
            NUESTRA HISTORIA
          </h1>
          <p className="py-3 text-justify md:text-[8px] md:leading-3 text-texto font-rale texto_cono">
            Brisa Natural nació en octubre de 2023 con un propósito claro:
            revolucionar la cosmética tradicional ofreciendo productos
            naturales, efectivos y sostenibles. <br /> <br />Creemos que la belleza no debe
            comprometer el bienestar del planeta, por eso desarrollamos fórmulas
            que cuidan la piel y el cabello sin dañar el medio ambiente. <br /><br />
            Comenzamos nuestra aventura en el Centro Comercial "El Algarrobo",
            en Piura, donde confirmamos que cada vez más personas buscan una
            alternativa consciente para su cuidado diario; y gracias al apoyo de
            mentorías especializadas en cosmética artesanal, hemos perfeccionado
            nuestras fórmulas y seguimos innovando. <br /><br /> Brisa Natural no es solo una
            marca, es un estilo de vida y cada producto que eliges es un paso
            hacia una belleza más consciente y un mundo más verde. <br /><br /> <span className=" flex text-center"><b >¡Súmate a
            este movimiento y descubre el poder de la naturaleza en tu piel!</b></span>
          </p>
        </div>
      </div>
    </div>
  );
};
