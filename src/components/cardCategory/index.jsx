import Button from "../button";

import "./CardCategory.css";

const index = ({
  bgColor,
  text,
  textBg,
  button,
  img,
  buttonType,
  imgHeight,
}) => {
  console.log(bgColor);
  const styleCard = {
    background: `linear-gradient(144.48deg, rgba(${bgColor}, 1) 48.39%, rgba(${bgColor}, 0.75) 100%)`,
  };

  const styleImg = {
    height: `${imgHeight}px`,
    top: `calc(45% - (${imgHeight}px / 2))`,
  };

  return (
    <div className="CardCategory" style={styleCard}>
      <div>
        <p style={{ color: text.color }} className="CardCategory-text">
          {text.content}
        </p>
        <p style={{ color: textBg.color }} className="CardCategory-textBg">
          {textBg.content}
        </p>
        <img
          style={styleImg}
          className="CardCategory-img"
          src={img}
          alt="shoe"
        />
        {!!button && <Button buttonType={buttonType} text="Ver Más" />}
      </div>
    </div>
  );
};

export default index;
