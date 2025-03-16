import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { CartContext } from "../Tienda/CartContext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const API_URL = "https://brisaback-production.up.railway.app/productos/";

export const DetalleProducto = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { sku } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("detalle");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.sku === sku);
        if (foundProduct) {
          setProduct({
            id: foundProduct.sku,
            name: foundProduct.nombre,
            price: foundProduct.precio,
            images: [
              foundProduct.img1,
              foundProduct.img2,
              foundProduct.img3,
              foundProduct.img4,
            ].filter((img) => img), // Filtrar imágenes no nulas
            descripcion: foundProduct.descripcion,
            detalle: foundProduct.detalle,
            ingredientes: foundProduct.ingrediente,
            modoUso: foundProduct.modo_uso,
          });
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [sku]);

  if (!product) return <p>Cargando...</p>;

  const tabs = [
    { label: "Descripción", key: "detalle" },
    { label: "Ingredientes", key: "ingredientes" },
    { label: "Modo de uso", key: "modoUso" },
  ];

  // Flechas personalizadas fuera del carrusel
  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="absolute -left-10 top-1/2 transform -translate-y-1/2  text-icons p-3 rounded-full z-10"
    >
      <ArrowBackIosIcon size={20} />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="absolute -right-10 top-1/2 transform -translate-y-1/2  text-icons p-3 rounded-full z-10"
    >
      <ArrowForwardIosIcon size={20} />
    </button>
  );

  // Configuración del carrusel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:w-[900px]">
      <button className="text-gray-500 mb-4 cursor-pointer" onClick={() => navigate(-1)}>
        ← Volver
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Carrusel con imágenes cuadradas */}
        <div className="relative flex justify-center items-center content-center">
          {product.images.length > 0 ? (
            <div className="max-w-[320px] mx-auto">
              <Slider {...sliderSettings}>
                {product.images.map((image, index) => (
                  <div key={index} className="relative flex justify-center">
                    <img
                      src={image}
                      alt={`Producto ${index + 1}`}
                      className="w-[300px] h-[300px] object-cover rounded-lg text-center"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <img
              src="/placeholder.svg"
              alt="Sin imagen"
              className="w-[300px] h-[300px] object-cover rounded-lg mx-auto"
            />
          )}
        </div>

        {/* Información del producto */}
        <div>
          <h1 className="text-2xl text-[#53594F] fuente-lale ">{product.name}</h1>
          <h1 className="text-2xl font-semibold text-[#53594F] py-6 font-rale">
            S/. {product.price}
          </h1>
          <p className="text-gray-600 text-justify font-rale">{product.descripcion}</p>
          <div className="flex items-center mt-4">
            <button
              className="px-3 py-1 border rounded-l-md font-rale"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-3 py-1 border rounded-r-md"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md cursor-pointer font-rale"
            onClick={() => addToCart({ ...product, quantity })}
          >
            Agregar al carrito
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-15">
        <div className="flex flex-col items-center h-60">
          <div className="flex space-x-6 border-b border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-2 text-lg cursor-pointer font-lale font-extralight ${
                  activeTab === tab.key
                    ? "text-texto border-b-2 border-texto"
                    : "text-gray-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contenido dinámico */}
          <div className="mt-4 text-texto max-w-2xl text-justify font-rale">
            {product[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};
