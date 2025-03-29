import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const API_PROD = "https://brisaback-production.up.railway.app/productos/";
const API_CAT = "https://brisaback-production.up.railway.app/categoria/";

export const Productos = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Categoría seleccionada
  const {cart, addToCart, updateQuantity} = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodResponse, catResponse] = await Promise.all([
          fetch(API_PROD),
          fetch(API_CAT),
        ]);

        const prodData = await prodResponse.json();
        const catData = await catResponse.json();

        // Filtrar solo categorías visibles
        const visibleCategories = catData
          .filter((category) => category.visible === true)
          .map((category) => ({
            id: category.id,
            name: category.nombre,
            image: category.imagen,
          }));

        setCategories(visibleCategories);

        // Guardar los productos con su relación de categoría
        setProducts(
          prodData.map((product) => ({
            id: product.sku,
            name: product.nombre,
            price: product.precio,
            image: product.img1 || "/placeholder.svg",
            categoryId: product.categoria, // ID de la categoría
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filtrar productos por categoría seleccionada
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory)
    : products;

  return (
    <div className="container mx-auto px-7 lg:px-30 py-10">
      {/* Categorías */}
      <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
        {/* Botón para ver todos los productos */}
        <button
          className={`min-w-[100px] px-4 py-2 rounded-md ${
            selectedCategory === null ? "bg-[#8B9D7B] text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          Todas
        </button>

        {/* Mapeo de categorías visibles con imagen */}
        {categories.map((category) => (
          <button
            key={category.id}
            className={`flex flex-col items-center gap-2 px-4 py-2  text-texto ${
              selectedCategory === category.id ? "border-b-2 text-icons" : "bg-transparent"
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <img src={category.image} alt={category.name} className="w-16 h-16 object-cover rounded-full border-solid border-black" />
            {category.name}
          </button>
        ))}
      </div>

      {/* Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No hay productos en esta categoría.</p>
        ) : (
          filteredProducts.map((product) => {
            const cartProduct = cart.find((item) => item.id === product.id);

            return (
              <div key={product.id} className="bg-gray-50 rounded-2xl p-4 relative">
                <Link to={`/producto/${product.id}`} className="block">
                  <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[#53594F] font-medium font-rale">{product.name}</h3>
                    <p className="text-[#53594F] font-rale">S/. {product.price}</p>
                  </div>
                </Link>
                <div className="mt-4">
                  {cartProduct ? (
                    <div className="flex border border-[#53594F] rounded-md">
                      <button
                        className="px-4 py-2 text-[#53594F] font-rale hover:bg-gray-100"
                        onClick={() => updateQuantity(product.id, -1)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="w-full text-center bg-transparent text-[#53594F] font-rale"
                        value={cartProduct.quantity}
                        readOnly
                      />
                      <button
                        className="px-4 py-2 text-[#53594F] hover:bg-gray-100"
                        onClick={() => updateQuantity(product.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="w-full py-2 bg-[#8B9D7B] text-white rounded-md font-rale hover:bg-[#7A8C6A] transition-colors flex items-center justify-center gap-2"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCartOutlinedIcon className="w-5 h-5" />
                      Agregar al carrito
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
