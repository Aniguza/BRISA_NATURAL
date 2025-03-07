import React from "react";
import { Hero } from "./Inicio/Hero";
import { Tarjetas_Inicio } from "./Inicio/Tarjetas_Inicio";
import { Beneficios } from "./Inicio/Beneficios";

export const Inicio = () => {
  return (
    <>
      <Hero />
      <Tarjetas_Inicio />
      <Beneficios />
    </>
  );
};
