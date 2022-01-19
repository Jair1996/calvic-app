import "./Benefits.css";
import TruckIcon from "../../assets/truck.png";
import RecycleIcon from "../../assets/recycle.png";
import StoreIcon from "../../assets/store.png";

const index = () => {
  return (
    <section className="Benefits">
      <div className="Benefits-item">
        <img className="Benfits-icon" src={TruckIcon} alt="truck icon" />
        <p className="Benfits-text">Envío a Lima y provincias</p>
      </div>
      <div className="Benefits-item">
        <img className="Benfits-icon" src={RecycleIcon} alt="truck icon" />
        <p className="Benfits-text">60 días para cambios</p>
      </div>
      <div className="Benefits-item">
        <img className="Benfits-icon" src={StoreIcon} alt="truck icon" />
        <p className="Benfits-text">Entregas garantizadas</p>
      </div>
    </section>
  );
};

export default index;
