import { useLocation } from "react-router-dom";
import "./common.scss";

const Placeholder = () => {
  const { pathname } = useLocation();
  return (
    <div className="placeholder page">{`Placeholder page : ${pathname}`}</div>
  );
};

export default Placeholder;
