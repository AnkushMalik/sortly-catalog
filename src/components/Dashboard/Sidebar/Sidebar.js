import {
  MdOutlineDashboard,
  MdOutlineInventory2,
  MdSearch,
  MdPushPin,
  MdInsertChartOutlined,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

const Sidebar = () => {
  const { pathname } = useLocation();

  const LinkData = [
    {
      path: ["/dashboard"],
      name: "Dashboard",
      iconElement: <MdOutlineDashboard />,
    },
    {
      path: ["/items", "/"],
      name: "Items",
      iconElement: <MdOutlineInventory2 />,
    },
    {
      path: ["/search"],
      name: "Search",
      iconElement: <MdSearch />,
    },
    {
      path: ["/tags"],
      name: "Tags",
      iconElement: <MdPushPin />,
    },
    {
      path: ["/reports"],
      name: "reports",
      iconElement: <MdInsertChartOutlined />,
    },
  ];

  return (
    <div className="sidebar">
      <img src={require("src/assets/logo.png")} className="logo" alt="logo" />
      <div className="nav">
        {LinkData.map((e, i) => (
          <Link
            to={e.path[0]}
            className={`nav-item ${e.path.includes(pathname) && "selected"}`}
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
