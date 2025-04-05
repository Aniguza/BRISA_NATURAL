import React from "react";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import LightbulbOutlinedIcon  from "@mui/icons-material/LightbulbOutlined";



const Card = ({ title, description, Icon }) => {
  return (
    <div className=" mx-auto">
      <div className="bg-extra rounded-3xl p-5 text-center relative h-full lg:px-11">
        {/* Circle with Icon */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:-top-12">
          <div >
            <Icon
              className=" text-icons"
            />
          </div>
        </div>

        {/* Content */}
        <div className="pt-5 md:pt-12">
          <h2 className="text-[#53594F] text-sm fuente-lale mb-2 md:text-2xl">{title}</h2>
          <p className="text-[#53594F] text-[9px] font-rale leading-3 mb-6 texto_cono ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const Mivi_conocenos = () => {
  return (
    <div className="px-5 py-20 md:px-27 lg:px-90">
      <div className="grid grid-cols-2 grid-rows-1 gap-4 md:gap-8">
        <div>
          <Card
            Icon={RocketLaunchOutlinedIcon}
            title="Misión"
            description="Cosmética natural sostenible para cuidar tu piel, cabello y el planeta."
          />
        </div>
        <div>
          <Card
            Icon={LightbulbOutlinedIcon}
            title="Visión"
            description="Liderar la cosmética natural con innovación, bienestar y sostenibilidad."
          />
        </div>
      </div>
    </div>
  );
};
