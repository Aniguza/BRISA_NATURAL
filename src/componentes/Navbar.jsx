"use client";
import { Menu } from "./Menu";
import { useState } from "react";

import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";

import { Burguer_icon } from "./Burguer_icon";
import Logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "./Tienda/CartContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="">
        <div className="navbar bg-white borde-none fixed top-0 z-10 h-18 justify-between ">
          <div className="flex flex-row ml-4 gap-4 items-center">
            <div className="drawer w-max ">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  className="md:hidden cursor-pointer w-min bg-amber-100"
                  htmlFor="my-drawer"
                  onClick={toggleDrawer}
                >
                  <Burguer_icon />
                </label>
              </div>
              <div className="drawer-side mt-18 ">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="menu text-xl min-h-full w-full p-4 bg-primario gap-3">
                  {/* Sidebar content here */}
                  <Menu />
                </div>
              </div>
            </div>

            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <img src={Logo} alt="" className="w-15 lg:w-20 lg:ml-15" />
            </Link>
          </div>
          <div className="flex gap-3-z-0 lg:mr-50 items-center md:gap-15 ">
            {/* Avatar/Usuario */}
            <div className="  items-center fixed justify-center text-secondario w-full gap-20 h-10 font-bold hidden md:flex right-0 fuente-lale uppercase">
              <Menu />
            </div>
            <div className="dropdown dropdown-end">
              <CircleUserRound
                tabIndex={0}
                role="button"
                className="text-[#53594F] hover:text-extra w-6 h-6 lg:w-8 lg:h-8"
              />

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-primario rounded-box z-[1] mt-3 w-30 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Perfil
                    {/* <span className="badge">New</span> */}
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Cerrar sesión</a>
                </li>
              </ul>
            </div>

            {/* Carrito */}
            <div className="dropdown dropdown-end relative  ">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="btn bg-transparent hover:text-primario border-none shadow-none relative"
              >
                <span className="indicator " tabIndex={0} role="button">
                  <ShoppingCart className="text-logo hover:text-primario w-6 h-6 lg:w-8 lg:h-8" />
                  {totalItems > 0 && (
                    <span className="badge badge-sm indicator-item">
                      {totalItems}
                    </span>
                  )}
                </span>
              </button>
              {isCartOpen && (
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-70 shadow animate__animated animate__zoomInDown animate__faster"
                >
                  <div className="card-body bg-extra border-4 border-primario">
                    {cart.length > 0 ? (
                      <>
                        <span className="text-lg font-bold text-primario">
                          {totalItems} Items
                        </span>
                        <span className="text-primario">
                          Subtotal: S/.{subtotal.toFixed(2)}
                        </span>
                        <ul className="max-h-60 overflow-auto ">
                          {cart.map((item) => (
                            <li
                              key={item.id}
                              className="flex items-center justify-between py-2 border-b border-b-primario"
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-10 h-10 object-cover rounded"
                              />
                              <div className="flex-1 ml-2 text-primario font-bold">
                                <p className="text-sm">{item.name}</p>
                                <p className="text-xs">
                                  S/. {item.price} x {item.quantity}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-block bg-primario border-none shadow-none">
                            <Link to="/Carrito" className="hover_menu">
                              Ver carrito
                            </Link>
                          </button>
                        </div>
                      </>
                    ) : (
                      <span className="text-center text-primario">
                        El carrito está vacío
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-1 transition-opacity duration-900 ease-linear"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
    </>
  );
};
