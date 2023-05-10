import "./styles.scss";

const Button = (props) => {
  const { buttonAction, buttonText, buttonIcon, buttonType } = props;
  return (
    <button onClick={buttonAction} className={`custom-button ${buttonType}`}>
      {buttonIcon}
      <span>{buttonText}</span>
    </button>
  );
};

export default Button;
