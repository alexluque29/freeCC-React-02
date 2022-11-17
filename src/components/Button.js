import '../styles/Button.css'

const Button = ({ text, isClickButton, useClick }) => {
  return (
    <button
      className={isClickButton ? "click" : "reset"}
      onClick={useClick}
    >
      {text}
    </button>
  );
};

export default Button;
