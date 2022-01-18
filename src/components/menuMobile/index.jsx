import { NavLink } from "react-router-dom";

import "./MenuMobile.css";
import menu from "../../assets/menu.svg";
import { useRef } from "react";

const MenuMobile = () => {
  const navRef = useRef();

  const handleTogleMenu = () => {
    navRef.current.classList.toggle("active");
  };

  return (
    <div className="MenuMobile">
      <img
        className="MenuMobile-img"
        onClick={handleTogleMenu}
        src={menu}
        alt="menu"
      />
      <nav ref={navRef} className="MenuMobile-nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? "MenuMobile-link colorActive" : "MenuMobile-link"
          }
          to={"/"}
          onClick={handleTogleMenu}
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "MenuMobile-link colorActive" : "MenuMobile-link"
          }
          to={"catalogo"}
          onClick={handleTogleMenu}
        >
          Catálogo
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "MenuMobile-link colorActive" : "MenuMobile-link"
          }
          to={"nosotros"}
          onClick={handleTogleMenu}
        >
          Nosotros
        </NavLink>
      </nav>
    </div>
  );
};

export default MenuMobile;
