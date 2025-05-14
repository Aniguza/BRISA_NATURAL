import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      {/* <div className="join items-center justify-center text-secondario w-full gap-20 h-10 border-y-1 font-bold hidden md:flex"> */}
        <Link to="/Inicio" className="hover_menu ">Inicio</Link>
        <Link to="/Conocenos" className="hover_menu ">Conócenos</Link>
        <Link to="/Tienda" className="hover_menu  ">Tienda</Link>
        <Link to="/Blog" className="hover_menu ">Blog</Link>
        <Link to="/Contacto" className="hover_menu ">Contacto</Link>
      
    </>
  );
};
