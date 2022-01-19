import "./Button.css";

const index = ({ buttonType, text }) => {
  return (
    <button
      className={`Button primary ${!!buttonType ? buttonType : ""}`}
    >
      {text}
    </button>
  );
};

export default index;
