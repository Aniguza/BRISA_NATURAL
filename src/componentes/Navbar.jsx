"use client";

import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


import Logo from "../assets/img/Logo.png";

export const Navbar = () => {
  // Añadimos el estado para controlar si el buscador móvil está abierto
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="navbar bg-white borde-none fixed top-0 z-50 h-18">
      <div className="flex-1">
        <a className="flex items-center gap-2 cursor-pointer">
          <img src={Logo} alt="" className="w-22 ml-5 lg:ml-15" />
        </a>
      </div>
      <div className="flex gap-3 items-center md:gap-15">
             

        {/* Avatar/Usuario */}
        <div className="dropdown dropdown-end">
          <AccountCircleIcon
            fontSize="large"
            tabIndex={0}
            role="button"
            className="text-[#53594F] hover:text-[red]"
          />

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>

        {/* Carrito */}
        <div className="dropdown dropdown-end">
          <span className="btn btn-ghost hover:text-[red] hover:bg-[transparent]">
            <span className="indicator" tabIndex={0} role="button">
              <ShoppingCartOutlinedIcon
                fontSize="large"
                className="text-[#53594F] hover:text-[red] "
              />
              <span className="badge badge-sm indicator-item">8</span>
            </span>
          </span>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};
