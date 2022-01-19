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
      />
      {/* <div className="CardCategories-container CardCategories-container-2">
        <CardCategory
          text={{
            content: "Zapatillas",
            color: "#000",
          }}
          textBg={{ content: "Lo último", color: "#FFF" }}
          bgColor="236, 236, 236"
          img={ShoeBest}
          imgHeight={267}
        />
        <CardCategory
          text={{
            content: "Zapatos",
            color: "#FFF",
          }}
          textBg={{ content: "Elegantes", color: "#FFEA9F" }}
          bgColor="254, 210, 55"
          img={ShoeVestir}
        />
        <CardCategory
          text={{
            content: "Sandalias",
            color: "#FFF",
          }}
          textBg={{ content: "Amazing", color: "#66A8F2" }}
          bgColor="22, 132, 255"
          img={SanldalMan}
        />
      </div> */}
    </section>
  );
};

export default index;
