import { NavLink } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  return (
    <nav className="Menu">
      <NavLink
        className={({ isActive }) =>
          isActive ? "Menu-link colorActive" : "Menu-link"
        }
        to={"/"}
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "Menu-link colorActive" : "Menu-link"
        }
        to={"catalogo"}
      >
        Catálogo
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "Menu-link colorActive" : "Menu-link"
        }
        to={"nosotros"}
      >
        Nosotros
      </NavLink>
    </nav>
  );
};

export default Menu;
