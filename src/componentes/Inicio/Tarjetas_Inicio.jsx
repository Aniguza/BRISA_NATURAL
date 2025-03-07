import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_tar from "../../assets/img/tarjIni.png";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      onClick={onClick}
      style={{ left: "-20px", color: "#71775c" }} // Ajusta la posición
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
      style={{ right: "-20px", color: "#71775c" }} // Ajusta la posición
    >
      <ArrowForwardIosIcon />
    </div>
  );
};

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
        breakpoint: 769,
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
    <div className="-z-10">
      <h1 className="text-center titulo-estilo">Lo que te ofrecemos</h1>
      <div className="slider my-10 mx-auto w-70 sm:w-xl md:w-2xl xl:w-5xl">
        <Slider {...settings}>
          {cardsData.map((card) => (
            <div key={card.id} className="px-4 ">
              <div className="card-lg  bg-base-100 shadow-sm rounded-xl ">
                <figure>
                  <img src={card.img} alt={card.title} className="w-full" />
                </figure>
                <div className="card-body bg-extra rounded-b-lg">
                  <h2 className="card-title text-secondario lg:text-2xl font-bold">
                    {card.title}
                  </h2>
                  <p className="text-texto lg:text-base">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
