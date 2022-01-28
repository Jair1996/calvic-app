import Hero from "../../components/hero";
import CardCategories from "../../components/cardCategories";
import Benefits from "../../components/benefits";
import Banner from "../../components/banner";
import FeaturedProducts from "../../components/featuredProducts";
import Brands from "../../components/brands";

import ImgBannerSummer from "../../assets/sandals.png";
import ImgBannerShoes from "../../assets/shoes.png";

const index = () => {
  return (
    <>
      <Hero />
      <CardCategories />
      <Benefits />
      <Banner
        img={ImgBannerSummer}
        textTitle="Moda verano"
        textDescription="No dejes pasar los descuentos que tenemos por verano"
        textBg="Lo mejor en saldalias"
        bgColor="#FB2735"
        textBgColor="#FC5560"
        goTo="catalogo/hombre/sandalias"
      />
      <FeaturedProducts />
      <Banner
        img={ImgBannerShoes}
        textTitle="Zapatos"
        textDescription="Los mejores productos en calzados de vestir"
        textBg="Elengancia en ti"
        bgColor="#FFC807"
        textBgColor="#FED852"
        btnColor="yellow"
        goTo="catalogo/hombre/zapatos"
      />
      <Brands />
    </>
  );
};

export default index;
