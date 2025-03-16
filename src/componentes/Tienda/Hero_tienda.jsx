import React from "react";
import hero from "../../assets/img/hero_tienda.png";
import foto_hero from "../../assets/img/foto_hero.png";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const Card = ({ title, description, Icon }) => {
  return (
    <div className="flex justify-center gap-6">
      <div>
        <Icon
          className="hidden sm:block text-icons"
          style={{ fontSize: window.innerWidth < 1024 ? 35 : 50 }}
        />
      </div>
      <div className="text-primario text-start">
        <h1 className="font-rale font-extrabold text-xl">{title}</h1>
        <p className="font-rale text-sm">{description}</p>
      </div>
    </div>
  );
};

export const Hero_tienda = () => {
  return (
    <div className="px-30 py-10">
      <div
        className="hero h-134 "
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "30px",
        }}
      >
        <div className="hero-content text-neutral-content text-center ">
          <div className="relative grid grid-cols-2 gap-6 w-full ">
            {/* Imagen del producto */}
            <div className="flex justify-center">
              <img
                src={foto_hero}
                className="w-sm rounded-lg"
                alt="Productos"
              />
            </div>

            {/* Texto y botón */}
            <div className="flex flex-col justify-center items-start ">
              <h1 className="text-5xl text-primario font-lale">
                Elige tu rutina
              </h1>
              <p className="py-6 pr-30 text-texto font-rale text-2xl text-start">
                Todo lo que necesitas para el cuidado de tu rostro, con nuestro
                BrisaPack.
              </p>
              <button className="bg-icons text-butonPrimary text-xl font-rale px-6 py-2 rounded-lg shadow-md hover:bg-logo transition">
                Crear rutina
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-[#EFF5EC] p-10 rounded-2xl">
        <div className="grid grid-cols-3 grid-rows-1 gap-4 text-center ">
          <div className="">
            <Card
              Icon={LocalShippingOutlinedIcon}
              title="Delivery"
              description="Envíos a todo el Perú"
            />
          </div>
          <div>
            <Card
              Icon={QueryBuilderOutlinedIcon}
              title="Atención 24/7"
              description="Nos preocupamos por tus experiencias"
            />
          </div>
          <div>
            <Card
              Icon={VerifiedUserOutlinedIcon}
              title="Pago seguro"
              description="Método de pago 100% seguro"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
