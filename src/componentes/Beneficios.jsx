import React from "react";
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';

const Card = ({ title, description, buttonText, Icon  }) => {
    return (
      <div className="card bg-base-100 w-96 shadow-sm p-4">
        <div className="flex justify-center text-green-600 text-4xl">
        <Icon /> {/* Renderiza el icono dinámicamente */}
        </div>
        <div className="card-body text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">{buttonText}</button>
          </div>
        </div>
      </div>
    );
  };

export const Beneficios = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4">
      <div>
      <Card 
        Icon={SpaOutlinedIcon} // Pasamos el icono como prop
        title="100% Natural" 
        description="Ingredientes puros y libres de químicos dañinos para el cuidado de tu piel." 
        buttonText="Ver más"
      />
      </div>
      <div className="col-start-1 row-start-2">2</div>
      <div className="row-span-2 col-start-2 row-start-1">3</div>
      <div className="col-start-3 row-start-1">4</div>
      <div className="col-start-3 row-start-2">5</div>
    </div>
  );
};
