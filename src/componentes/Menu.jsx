import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      {/* <div className="join items-center justify-center text-secondario w-full gap-20 h-10 border-y-1 font-bold hidden md:flex"> */}
        <Link to="/Conocenos">CONÓCENOS</Link>
        <Link to="/Tienda">TIENDA</Link>
        <Link to="/Blog">BLOG</Link>
        <Link to="/Contacto">CONTACTO</Link>
      
    </>
  );
};
