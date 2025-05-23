import React from "react";
import { Rocket } from "lucide-react";
import { Lightbulb } from "lucide-react";

const Card = ({ title, description, Icon }) => {
  return (
    <div className=" mx-auto">
      <div className="bg-extra rounded-3xl p-5 text-center relative h-full lg:px-11">
        {/* Circle with Icon */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:-top-12 border-4 bg-white border-icons rounded-full">
          <div className="p-3">
            <Icon
              className="text-icons w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
          </div>
        </div>

        {/* Content */}
        <div className="pt-5 md:pt-6">
          <h2 className="text-[#53594F] text-xl fuente-lale mb-2 md:text-2xl">{title}</h2>
          <p className="text-[#53594F] text-[12px] font-rale leading-4 mb-4 texto_cono ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const Mivi_conocenos = () => {
  return (
    <div className="px-5 pt-15 pb-12 md:px-27 lg:px-90 lg:pb-20 lg:pt-30">
      <div className="grid grid-cols-2 grid-rows-1 gap-4 md:gap-8">
        <div>
          <Card
            Icon={Rocket}
            title="Misión"
            description="Cosmética natural sostenible para cuidar tu piel, cabello y el planeta."
          />
        </div>
        <div>
          <Card
            Icon={Lightbulb}
            title="Visión"
            description="Liderar la cosmética natural con innovación, bienestar y sostenibilidad."
          />
        </div>
      </div>
    </div>
  );
};
