import { Outlet, useParams } from "react-router-dom";
import MenuCatalog from "../../components/menuCatalog";

import "./Catalog.css";

const Catalog = () => {
  let { category, subcategory } = useParams();
  console.log(category, subcategory);
  return (
    <div className="Catalog">
      <div className="component">
        <MenuCatalog />
      </div>
      <div className="component">
        <Outlet />
      </div>
    </div>
  );
};

export default Catalog;
