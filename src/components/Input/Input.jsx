const Input = ({
  bordered,
  inputType,
  inputValue,
  placeHolder,
  handleOnChange,
}) => {
  return (
    <input
      className={`custom-input ${bordered ? "bordered" : ""}`}
      type={inputType}
      placeholder={placeHolder}
      onChange={handleOnChange}
      value={inputValue}
    />
  );
};

export default Input;
