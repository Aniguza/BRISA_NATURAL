import React from "react";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const Card = ({ title, description, Icon }) => {
  return (
    <div className=" mx-auto">
      <div className="bg-extra rounded-3xl p-5 text-center relative h-full lg:px-11">
        {/* Circle with Icon */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:-top-12">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-3 border-icons resp-icons lg:border-5">
            <Icon
              className="hidden sm:block text-icons"
              style={{ fontSize: window.innerWidth < 1024 ? 35 : 50 }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="pt-5 md:pt-12">
          <h2 className="text-[#53594F] text-sm font-bold mb-2 md:text-2xl">{title}</h2>
          <p className="text-[#53594F] text-[9px] leading-3 mb-6 texto_cono">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const Mivi_conocenos = () => {
  return (
    <div className="px-5 py-15 md:px-27 lg:px-40">
      <div className="grid grid-cols-2 grid-rows-1 gap-4 md:gap-8">
        <div>
          <Card
            Icon={RocketLaunchOutlinedIcon}
            title="Misión"
            description="Crear productos de cuidado personal 100% naturales, combinando ingredientes locales y sostenibles para ofrecer bienestar a la piel, respetando el medio ambiente y promoviendo el consumo consciente."
          />
        </div>
        <div>
          <Card
            Icon={LightbulbOutlinedIcon}
            title="Visión"
            description="Ser una marca reconocida a nivel nacional e internacional por la calidad y autenticidad de nuestros productos naturales, contribuyendo al bienestar de las personas y al desarrollo sostenible de las comunidades."
          />
        </div>
      </div>
    </div>
  );
};
