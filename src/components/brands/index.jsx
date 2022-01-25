import "./Brands.css";

import LogoCalvic from "../../assets/logoCalvic.png";
import LogoReebok from "../../assets/logoReebok.png";
import LogoAdidas from "../../assets/logoAdidas.png";
import LogoNike from "../../assets/logoNike.png";

const index = () => {
  return (
    <section className="Brands">
      <img className="Brands-logoCalvic" src={LogoCalvic} alt="logo calvic" />
      <img className="Brands-logoReebok" src={LogoReebok} alt="logo reebok" />
      <img className="Brands-logoAdidas" src={LogoAdidas} alt="logo adidas" />
      <img className="Brands-logoNike" src={LogoNike} alt="logo nike" />
    </section>
  );
};

export default index;
