import React from "react";

import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';

const Card = ({ title, Icon }) => {
  return (
    <div className="flex flex-col gap-3 items-center py-10">
      <div className="w-16 h-16 rounded-full bg-extra flex items-center justify-center resp-icons">
        <Icon
          className="hidden sm:block text-icons "
          style={{ fontSize: window.innerWidth < 768 ? 30 : 50 }}
        />
      </div>
      <p className="text-xs text-texto md:text-lg lg:font-bold">{title}</p>
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
          <Card Icon={StarBorderOutlinedIcon} title="Calidad" />
        </div>
        <div>
          <Card Icon={YardOutlinedIcon} title="Sostenibilidad" />
        </div>
        <div>
          <Card Icon={HandshakeOutlinedIcon} title="Compromiso" />
        </div>
        <div>
          <Card Icon={BiotechOutlinedIcon} title="Innovación" />
        </div>
      </div>
    </div>
  );
};
