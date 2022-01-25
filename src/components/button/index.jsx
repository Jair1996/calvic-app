import "./Button.css";

const index = ({ buttonType, text, color }) => {
  return (
    <button
      className={`Button primary ${!!buttonType ? buttonType : ""} ${
        !!color ? color : ""
      }`}
    >
      {text}
    </button>
  );
};

export default index;
