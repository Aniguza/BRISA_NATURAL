import React from "react";
import img from "../../assets/img/port_conocenos.png";

export const Portada_conocenos = () => {
  return (
    <div
      className="hero flex justify-center h-50 lg:h-85"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-content text-neutral-content text-center w-80 md:w-100 lg:w-135">
        <h1 className="text-2xl font-lale text-extra text-center md:text-3xl lg:text-5xl">
          "Belleza natural, creada con amor y respeto por tu piel"
        </h1>
      </div>
    </div>
  );
};
