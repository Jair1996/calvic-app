import { useNavigate } from "react-router-dom";

import "./Button.css";

const Button = ({ buttonType, text, color, goTo }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(goTo);
  };

  return (
    <button
      onClick={handleClick}
      className={`Button primary ${!!buttonType ? buttonType : ""} ${
        !!color ? color : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
