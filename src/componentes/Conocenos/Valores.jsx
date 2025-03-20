import React from "react";

import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";

const Card = ({ title, Icon, descripcion }) => {
  return (
    <div className="tooltip tooltip-left" data-tip={descripcion}>
      <div className="  flex flex-col gap-3 items-center py-10">
        <div className="w-16 h-16 rounded-full bg-extra flex items-center justify-center resp-icons">
          <Icon
            className="hidden sm:block text-icons "
            style={{ fontSize: window.innerWidth < 768 ? 30 : 50 }}
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
            Icon={YardOutlinedIcon}
            title="Sostenibilidad"
            descripcion="Desarrollamos productos amigables con el medio ambiente y promovemos la economía circular."/>
        </div>
        <div>
          <Card
            Icon={YardOutlinedIcon}
            title="Bienestar"
            descripcion="Creemos en una belleza saludable y accesible, que nutra tanto la piel como la confianza de nuestras clientes."/>
        </div>
        <div>
          <Card
            Icon={HandshakeOutlinedIcon}
            title="Autenticidad"
            descripcion="Nuestros cosméticos están formulados con ingredientes naturales y cuidadosamente seleccionados."/>
        </div>
        <div>
          <Card
            Icon={HandshakeOutlinedIcon}
            title="Compromiso"
            descripcion="Trabajamos con comunidades locales para fomentar prácticas ecológicas y educación ambiental."/>
        </div>
      </div>
    </div>
  );
};
