import { Link, useLocation } from "react-router-dom";
import LinkData from "src/config/linkData";

import "./styles.scss";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="sidebar">
      <img src={require("src/assets/logo.png")} className="logo" alt="logo" />
      <div className="nav">
        {LinkData.map((e, i) => (
          <Link
            to={e.path[0]}
            className={`nav-item ${e.path.includes(pathname) && "selected"}`}
            key={i}
          >
            {e.iconElement}
            <span className="nav-item-name">{e.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
