import NotFound from "../../assets/notFound.svg";
import Button from "../../components/button";

import "./NotFound.css";

const index = () => {
  return (
    <div className="NotFound">
      <img className="NotFound-image" src={NotFound} alt="Not found icon" />
      <p className="NotFound-title">Lo sentimos</p>
      <p className="NotFound-content">
        La página que estabas buscando no existe o ha sido movida.
      </p>
      <Button text="Ir al inicio" goTo="/" />
    </div>
  );
};

export default index;
