import Button from "../button";

import "./Banner.css";

const index = ({
  img,
  textTitle,
  textDescription,
  textBg,
  bgColor,
  textBgColor,
  btnColor,
}) => {
  return (
    <section className="Banner" style={{ backgroundColor: bgColor }}>
      <img className="Banner-image" src={img} alt="banner" />
      <div className="Banner-item">
        <p className="Banner-textBg" style={{ color: textBgColor }}>
          {textBg}
        </p>
      </div>
      <div className="Banner-item">
        <p className="Banner-title">{textTitle}</p>
        <p className="Banner-description">{textDescription}</p>
        <div>
          <Button buttonType="ghost" text="Ver Catálogo" color={btnColor} />
        </div>
      </div>
    </section>
  );
};

export default index;
