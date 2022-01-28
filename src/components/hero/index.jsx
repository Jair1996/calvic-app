import Button from "../button";

import "./Hero.css";
import HeroImage from "../../assets/heroImage.png";

const index = () => {
  return (
    <section className="Hero">
      <img className="Hero-image" src={HeroImage} alt="hero images" />
      <div className="Hero-details">
        <p className="Hero-design">Diseño</p>
        <p className="Hero-desc text-bold">Estilo</p>
        <h1 className="text-bold">BEST SHOES</h1>
        <Button text="Ver Catálogo" goTo={"catalogo/hombre/sandalias"} />
      </div>
    </section>
  );
};

export default index;
