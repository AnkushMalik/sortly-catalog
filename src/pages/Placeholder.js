import { useLocation } from "react-router-dom";
import "./pages.scss";

const Placeholder = () => {
  const { pathname } = useLocation();
  return (
    <div className="placeholder page">{`Placeholder page : ${pathname}`}</div>
  );
};

export default Placeholder;
