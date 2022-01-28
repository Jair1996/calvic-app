import CardCategory from "../cardCategory";

import "./CardCategories.css";
import ShoeWoman from "../../assets/shoe-woman.png";
import ShoeKid from "../../assets/shoe-kid.png";
import ShoeMan from "../../assets/shoe-man.png";

const index = () => {
  return (
    <section className="CardCategories">
      <CardCategory
        text={{
          content: "Mujer",
          color: "#FFF",
        }}
        textBg={{ content: "Para ellas", color: "#474747" }}
        bgColor="35, 35, 35"
        button={true}
        img={ShoeWoman}
        imgHeight={210}
        goTo={"catalogo/mujer/sandalias"}
      />
      <CardCategory
        text={{
          content: "Niños",
          color: "#FFF",
        }}
        textBg={{ content: "Lo mejor", color: "#ECACCE" }}
        bgColor="190, 126, 161"
        button={true}
        buttonType="ghost"
        img={ShoeKid}
        imgHeight={188}
        goTo={"catalogo/children/sandalias"}
      />
      <CardCategory
        text={{
          content: "Hombre",
          color: "#FFF",
        }}
        textBg={{ content: "Para ellos", color: "#EF858B" }}
        bgColor="244, 44, 55"
        button={true}
        buttonType="ghost"
        img={ShoeMan}
        imgHeight={253}
        goTo={"catalogo/hombre/sandalias"}
      />
    </section>
  );
};

export default index;
