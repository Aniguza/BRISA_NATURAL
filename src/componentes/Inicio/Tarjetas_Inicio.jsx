import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useFetch } from "../api/apiService";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      onClick={onClick}
      style={{ left: "-20px", color: "#71775c" }}
    >
      <ArrowBackIosIcon />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      onClick={onClick}
      style={{ right: "-20px", color: "#71775c" }}
    >
      <ArrowForwardIosIcon />
    </div>
  );
};

export const Tarjetas_Inicio = () => {
  const [isLoading, setIsLoading] = useState(true);

  const {
    data: categoria,
    loading: loadingCategoria,
    error: errorCategoria,
  } = useFetch("https://backend-production-9307.up.railway.app/categoria/");

  useEffect(() => {
    if (!loadingCategoria) {
      setIsLoading(false);
    }
  }, [loadingCategoria]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col -z-10 bg-white items-center">
      <h1 className="text-center titulo-estilo w-50">Rinde más, gasta menos y vive mejor.</h1>
      <div className="slider my-10 mx-auto w-70 sm:w-xl md:w-3xl xl:w-5xl">
        {errorCategoria ? (
          <p>Error: {errorCategoria}</p>
        ) : isLoading ? (
          <p>Cargando categorías...</p>
        ) : categoria.length === 0 ? (
          <p>No hay categorías disponibles.</p>
        ) : (
          <Slider {...settings}>
            {categoria.map((item) => (
              <div key={item.id} className="px-4 shadow-2xs hover:-translate-y-4 transition-transform">
                <div className="card-lg bg-base-100 shadow-sm rounded-xl ">
                  <figure className="w-full ">
                    <img src={item.imagen} alt={item.nombre} className="w-250 h-80 object-cover rounded-t-xl" />
                  </figure>
                  <div className="card-body bg-extra rounded-b-lg h-50 flex items-center">
                    <h2 className="card-title text-secondario fuente-lale lg:text-2xl  ">
                      {item.nombre}
                    </h2>
                    <p className="text-texto font-rale lg:text-base">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};
