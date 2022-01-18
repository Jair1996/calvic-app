import { NavLink } from "react-router-dom";

import MenuMobile from "../menuMobile";
import Menu from "../menu";

import "./Header.css";
import logo from "../../assets/logo.png";

const index = () => {
  return (
    <header className="Header">
      <div className="content-wrapper">
        <NavLink to={"/"}>
          <img className="Header-logo" src={logo} alt="logo" />
        </NavLink>
        <MenuMobile />
        <Menu />
      </div>
    </header>
  );
};

export default index;
