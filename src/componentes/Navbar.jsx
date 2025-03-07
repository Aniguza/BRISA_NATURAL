"use client";
import { Menu } from "./Menu";
import { useState } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Burguer_icon } from "./burguer_icon";
import Logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="">
        <div className="navbar bg-white borde-none fixed top-0 z-10 h-18 justify-between">
          <div className="flex flex-row ml-4 gap-4 items-center">
            <div className="drawer w-max">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  className="md:hidden cursor-pointer w-min"
                  htmlFor="my-drawer"
                  onClick={toggleDrawer}
                >
                  <Burguer_icon />
                </label>
              </div>
              <div className="drawer-side mt-18">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="menu text-base-content min-h-full w-80 p-4 bg-primario ">
                  {/* Sidebar content here */}
                  <Menu />
                </div>
              </div>
            </div>

            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <img src={Logo} alt="" className="w-22  lg:ml-15" />
            </Link>
          </div>

          <div className="flex gap-3-z-0 items-center md:gap-15 ">
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
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="join mt-18 items-center justify-center text-secondario w-full gap-20 h-10 border-y-1 font-bold hidden md:flex">
          <Menu />
        </div>
      </div>
    </>
  );
};
