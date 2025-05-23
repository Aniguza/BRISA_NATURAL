import React from "react";

import { Star } from "lucide-react";
import { Sprout } from "lucide-react";
import { Handshake } from "lucide-react";
import { Microscope } from "lucide-react";

const Card = ({ title, Icon, descripcion }) => {
  return (
    <div className="tooltip tooltip-top" data-tip={descripcion}>
      <div className="flex flex-col gap-3 items-center py-6">
        <div className="w-16 h-16 rounded-full bg-extra flex items-center justify-center resp-icons">
          <Icon
            className="w-6 h-6 md:w-12 sm:h-12  text-icons "
          />
        </div>
        <p className="text-xs text-texto md:text-lg lg:font-bold">{title}</p>
      </div>
    </div>
  );
};
export const Valores = () => {
  return (
    <div className=" text-center pb-4">
      <h1 className="text-xs font-bold text-secondario fuente-lale md:text-2xl">
        VALORES DE NUESTRA EMPRESA
      </h1>
      <div className="grid grid-cols-4 grid-rows-1 gap-2 items-center px-5 md:px-20 lg:px-60 font-rale">
        <div>
          <Card
            Icon={Star}
            title="Sostenibilidad"
            descripcion="Desarrollamos productos amigables con el medio ambiente y promovemos la economía circular."/>
        </div>
        <div>
          <Card
            Icon={Sprout}
            title="Bienestar"
            descripcion="Creemos en una belleza saludable y accesible, que nutra tanto la piel como la confianza de nuestras clientes."/>
        </div>
        <div>
          <Card
            Icon={Handshake}
            title="Autenticidad"
            descripcion="Nuestros cosméticos están formulados con ingredientes naturales y cuidadosamente seleccionados."/>
        </div>
        <div>
          <Card
            Icon={Microscope}
            title="Compromiso"
            descripcion="Trabajamos con comunidades locales para fomentar prácticas ecológicas y educación ambiental."/>
        </div>
      </div>
    </div>
  );
};
