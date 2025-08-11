import React from "react";
import { Trash } from "lucide-react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Carrito = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const descuento = subtotal * 0;
  const total = subtotal - descuento;

  return (
    <div className="flex justify-center gap-9 py-10">
      <div className="w">
        <div className="space-y-6">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-extra pb-4 gap-6"
              >
                {/* Imagen del producto */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-primario">
                      {item.name}
                    </h3>
                    <p className="text-texto text-sm">unidad</p>
                    <p className="text-lg font-semibold text-texto">
                      S/. {(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Controles de cantidad y eliminar */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        className="px-2 py-1 text-gray-600 cursor-pointer"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity === 1}
                      >
                        −
                      </button>
                      <span className="px-4 py-1 text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        className="px-2 py-1 text-gray-600 cursor-pointer"
                        onClick={() => updateQuantity(item.id, 1)}
                        disabled={item.quantity === 10}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-primario text-end text-xs">Máx. 10 uni</p>
                  </div>
                  <button
                    className="text-gray-500 hover:text-texto cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Tu carrito está vacío</p>
          )}
        </div>
      </div>

      {/*-------Pagoo-----*/}
      <div className="flex justify-center">
        <div className=" p-6 rounded-lg  w-80">
          <h2 className="text-lg font-bold text-primario mb-4">
            Resumen de la orden
          </h2>

          <div className="space-y-2 text-texto">
            <div className="flex justify-between">
              <span>Productos ({totalItems})</span>
              <span>S/. {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Descuento</span>
              <span>S/. {descuento.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>S/. {total.toFixed(2)}</span>
            </div>
          </div>

          <Link to="/PagoForm" className="hover_menu">
            Finalizar compra
          </Link>
          
        </div>
      </div>
    </div>
  );
};
