import React from "react";
import img_tar from '../assets/img/tarjIni.png';

const cardsData = [
  {
    id: 1,
    title: "Jabones",
    description: "🌿 Limpieza y nutrición para tu piel",
    img: img_tar,
  },
  {
    id: 2,
    title: "Sérum",
    description: "✨ Tratamientos intensivos para una piel radiante",
    img: img_tar,
  },
  {
    id: 3,
    title: "Cremas",
    description: "💧 Nutrición y regeneración para un rostro saludable",
    img: img_tar,
  },
];

export const Tarjetas_Inicio = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center my-10 mx-auto max-w-7xl ">
      {cardsData.map((card) => (
        <div key={card.id} className="card bg-base-100 w-85 h-100 shadow-sm rounded-xl">
          <figure className="">
            <img src={card.img} alt={card.title} className="w-full "/>
          </figure>
          <div className="card-body bg-extra rounded-b-lg">
            <h2 className="card-title text-secondario text-2xl font-bold">{card.title}</h2>
            <p className="text-texto text-base">{card.description}</p>   
          </div>
        </div>
      ))}
    </div>
  );
};
