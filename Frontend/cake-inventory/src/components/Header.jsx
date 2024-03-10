import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../public/logo.svg";

const Header = () => {
  return (
    <header className="font-nunitoSans p-4">
      <NavLink className="flex justify-between items-center">
        {/* <Logo /> */}
        <img src={Logo} alt="Logo" width={"200px"} />
        <ul className="flex gap-3 items-center font-medium text-xl">
          <li className="hover:text-theme-color ">
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li className="hover:text-theme-color ">
            <Link to={"/"}>Admin</Link>
          </li>
          <li className="hover:text-theme-color ">Contact</li>
          <li className="hover:text-theme-color ">Stock</li>
          <li>
            <button
              type="button"
              className="rounded-3xl p-2 bg-theme-color text-[#fff]"
            >
              Order Now
            </button>
          </li>
        </ul>
      </NavLink>
    </header>
  );
};

export default Header;
