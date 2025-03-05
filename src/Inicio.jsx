import React from "react";
import { Menu } from "./componentes/Menu";
import { Hero } from "./componentes/Hero";
import { Tarjetas_Inicio } from "./componentes/Tarjetas_Inicio";
import { Beneficios } from "./componentes/Beneficios";

export const Inicio = () => {
  return (
    <>
      <Menu />
      <Hero />
      <Tarjetas_Inicio />
      <Beneficios />
    </>
  );
};
