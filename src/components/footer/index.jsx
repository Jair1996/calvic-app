import { Link } from "react-router-dom";

import "./Footer.css";

import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="content-wrapper">
        <figure>
          <img className="Footer-logo" src={logo} alt="logo" />
        </figure>
        <div>
          <h2>Enlaces</h2>
          <nav>
            <Link className="link" to={"/"}>
              Inicio
            </Link>
            <Link className="link" to={"catalogo/hombre/sandalias"}>
              Catálogo
            </Link>
            <Link className="link" to={"nosotros"}>
              Nosotros
            </Link>
          </nav>
        </div>
        <div>
          <h2>Contacto</h2>
          <div>
            <p>+51 958748596</p>
            <p>Av. Santa Nicolasa 754 Ate - Lima</p>
            <p>Horario de atención de Lunes a Domingo de 8:00 am - 09:00 pm</p>
          </div>
        </div>
        <div>
          <h2>Redes</h2>
          <div className="Footer-redes">
            <img src={facebook} alt="logo facebook" />
            <img src={youtube} alt="logo yotube" />
            <img src={instagram} alt="logo instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
