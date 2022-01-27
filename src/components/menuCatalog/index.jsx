import { useRef } from "react";
import { NavLink } from "react-router-dom";

import "./MenuCatalog.css";
import menu from "../../assets/menu-catalog.svg";
import arrowBot from "../../assets/arrow_bot.png";

const MenuCatalog = () => {
  const navRef = useRef();

  const style = {
    cursor: "pointer",
    outline: 0,
  };

  const handleTogleMenu = () => {
    navRef.current.classList.toggle("MenuCatalog-active");
  };

  return (
    <div className="MenuCatalog">
      <img
        className="MenuCatalog-img"
        onClick={handleTogleMenu}
        src={menu}
        alt="menu"
      />
      <nav ref={navRef} className="MenuCatalog-nav">
        <details open>
          <summary className="MenuCatalog-titleList" style={style}>
            Hombre
            <img src={arrowBot} alt="flecha" />
          </summary>
          <ol className="MenuCatalog-list">
            <li onClick={handleTogleMenu} className="MenuCatalog-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "Menu-link MenuCatalog-colorActive" : "Menu-link"
                }
                to={"hombre/sandalias"}
              >
                Sandalias
              </NavLink>
            </li>
            <li onClick={handleTogleMenu} className="MenuCatalog-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "Menu-link MenuCatalog-colorActive" : "Menu-link"
                }
                to={"hombre/zapatillas"}
              >
                Zapatillas
              </NavLink>
            </li>
            <li onClick={handleTogleMenu} className="MenuCatalog-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "Menu-link MenuCatalog-colorActive" : "Menu-link"
                }
                to={"hombre/zapatos"}
              >
                Zapatos
              </NavLink>
            </li>
          </ol>
        </details>

        <details open>
          <summary className="MenuCatalog-titleList" style={style}>
            Mujer
            <img src={arrowBot} alt="flecha" />
          </summary>
          <ol className="MenuCatalog-list">
            <li onClick={handleTogleMenu} className="MenuCatalog-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "Menu-link MenuCatalog-colorActive" : "Menu-link"
                }
                to={"mujer/sandalias"}
              >
                Sandalias
              </NavLink>
            </li>
            <li onClick={handleTogleMenu} className="MenuCatalog-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "Menu-link MenuCatalog-colorActive" : "Menu-link"
                }
                to={"mujer/zapatillas"}
              >
                Zapatillas
              </NavLink>
            </li>
            <li onClick={handleTogleMenu} className="MenuCatalog-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "Menu-link MenuCatalog-colorActive" : "Menu-link"
                }
                to={"mujer/zapatos"}
              >
                Zapatos
              </NavLink>
            </li>
          </ol>
        </details>

        <details open>
          <summary className="MenuCatalog-titleList" style={style}>
            Niños
            <img src={arrowBot} alt="flecha" />
          </summary>
          <ol className="MenuCatalog-list">
            <li onClick={handleTogleMenu} className="MenuCatalog-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "Menu-link MenuCatalog-colorActive" : "Menu-link"
                }
                to={"children/sandalias"}
              >
                Sandalias
              </NavLink>
            </li>
            <li onClick={handleTogleMenu} className="MenuCatalog-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "Menu-link MenuCatalog-colorActive" : "Menu-link"
                }
                to={"children/zapatillas"}
              >
                Zapatillas
              </NavLink>
            </li>
            <li onClick={handleTogleMenu} className="MenuCatalog-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "Menu-link MenuCatalog-colorActive" : "Menu-link"
                }
                to={"children/zapatos"}
              >
                Zapatos
              </NavLink>
            </li>
          </ol>
        </details>
      </nav>
    </div>
  );
};

export default MenuCatalog;
