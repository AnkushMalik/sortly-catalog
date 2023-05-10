import "./styles.scss";

const Modal = (props) => {
  const { modalState, children } = props;
  return (
    <div className={`custom-modal ${modalState}`}>
      <div className="background"></div>
      <div className="custom-modal-children">{children}</div>
    </div>
  );
};

export default Modal;
