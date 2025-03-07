import React from "react";
import { useState } from "react";

import "../assets/css/burguer_icon.css"

export const Burguer_icon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="nav-icon3"
      className={isOpen ? "open" : ""}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="bg-icons "></span>
      <span className="bg-icons "></span>
      <span className="bg-icons "></span>
      <span className="bg-icons "></span>
    </div>
  );
};
