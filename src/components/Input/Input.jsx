import "./styles.scss";

const Input = ({
  bordered = true,
  inputType,
  inputValue,
  placeHolder,
  handleOnChange,
  errorMessage = "",
}) => {
  return (
    <div className="custom-input-container">
      <input
        className={`custom-input ${bordered ? "bordered" : ""} ${
          errorMessage.length > 0 ? "invalid-input" : ""
        }`}
        type={inputType}
        placeholder={placeHolder}
        onChange={handleOnChange}
        value={inputValue}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default Input;
