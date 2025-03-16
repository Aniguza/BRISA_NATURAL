import React from "react";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import PublicIcon from '@mui/icons-material/Public';
import SignLanguageOutlinedIcon from '@mui/icons-material/SignLanguageOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';

import img_prod from '../../assets/img/img_prod.png';

const Card = ({ title, description, Icon }) => {
  return (
    <div className=" contents card w-44 sm:w-50 p-2 sm:p-4"> {/* Más pequeña en móviles */}
      <div className="flex justify-center text-icons">
        <Icon className="hidden sm:block" style={{ fontSize: window.innerWidth < 768 ? 30 : 50 }} /> 
      </div>
      <div className="card-body text-center items-center sm:w-50 xl:w-80">
        <h2 className="card-title text-primario font-rale text-sm sm:text-xl">{title}</h2> 
        <p className="text-texto text-xs font-rale lg:text-base ">{description}</p> 
      </div>
    </div>
  );
};

export const Beneficios = () => {
  return (
    <div className="text-center mt-15 mb-10">
      <h1 className="titulo-estilo">
        Nuestros productos
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 max-w-7xl mx-auto justify-items-center">
        {/* Tarjeta 1 */}
        <div>
          <Card
            Icon={GrassOutlinedIcon}
            title="100% Natural"
            description="Ingredientes puros y libres de químicos dañinos para el cuidado de tu piel de forma saludable."
          />
        </div>

        {/* Imagen */}
        <div className="hidden sm:flex sm:col-span-1 sm:row-span-2 items-center justify-center ">
          <img src={img_prod} alt="imagen" className="w-60 h-auto" />
        </div>

        {/* Tarjeta 2 */}
        <div>
          <Card
            Icon={PublicIcon}
            title="Ecoamigables"
            description="Productos elaborados con respeto por el medio ambiente, usando procesos sostenibles y materiales biodegradables."
          />
        </div>

        {/* Tarjeta 3 */}
        <div>
          <Card
            Icon={SignLanguageOutlinedIcon}
            title="Artesanales"
            description="HHechos a mano con dedicación y cuidado, garantizando calidad y autenticidad en cada producto."
          />
        </div>

        {/* Tarjeta 4 */}
        <div>
          <Card
            Icon={YardOutlinedIcon}
            title="No Tóxicos"
            description="Sin parabenos, sulfatos ni ingredientes dañinos. Cuidado seguro para ti y para el planeta."
          />
        </div>
      </div>
    </div>
  );
};
