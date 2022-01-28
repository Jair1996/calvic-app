import "./ContentAboutUs.css";

import AboutUs from "../../assets/aboutUs.svg";
import Mision from "../../assets/mision.svg";
import Vision from "../../assets/vision.svg";

const ContentAboutUs = () => {
  return (
    <div className="ContentAboutUs">
      <div className="ContentAboutUs-container1">
        <div className="ContentAboutUs-aboutUsContainer">
          <h2 className="ContentAboutUs-subtitle">¿Quiénes somos?</h2>
          <p className="ContentAboutUs-content">
            Somos una empresa peruana dedica a la venta de calzados, nacimos el
            24/06/2019. Nuestra profesionalidad nos ha permitido crecer de una
            forma rápida y ser considerado por nuestros clientes como la mejor
            tienda online de calzados.
          </p>
        </div>
        <figure className="ContentAboutUs-imageContainer aboutUs">
          <img
            className="ContentAboutUs-imageAboutUs"
            src={AboutUs}
            alt="about us"
          />
        </figure>
      </div>
      <div className="ContentAboutUs-container2">
        <div className="ContentAboutUs-visionContainer">
          <h2 className="ContentAboutUs-subtitle mision">Misión</h2>
          <p className="ContentAboutUs-content">
            Ofrecer los mejores productos con una alta calidad y a un precio
            adecuado.
          </p>
          <figure className="ContentAboutUs-imageContainer">
            <img className="ContentAboutUs-mision" src={Mision} alt="mision" />
          </figure>
        </div>
        <div className="ContentAboutUs-misionContainer">
          <h2 className="ContentAboutUs-subtitle vision">Visión</h2>
          <p className="ContentAboutUs-content">
            Ser la empresa peruana lider en la venta de calzados. Empresa
            peruana reconocida en el mundo nacional e internacional por su alta
            calidad de sus productos.
          </p>
          <figure className="ContentAboutUs-imageContainer">
            <img className="ContentAboutUs-vision" src={Vision} alt="vision" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ContentAboutUs;
