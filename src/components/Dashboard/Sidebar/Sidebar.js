import {
  MdOutlineDashboard,
  MdOutlineInventory2,
  MdSearch,
  MdPushPin,
  MdInsertChartOutlined,
} from "react-icons/md";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./styles.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={require("src/assets/logo.png")} className="logo" alt="logo" />
      <Router>
        <div className="nav">
          <Link to="#">
            <div className="nav-item">
              <MdOutlineDashboard />
              <span className="nav-item-name">Dashboard</span>
            </div>
          </Link>

          <Link to="#">
            <div className="nav-item">
              <MdOutlineInventory2 />
              <span className="nav-item-name">Items</span>
            </div>
          </Link>

          <Link to="#">
            <div className="nav-item">
              <MdSearch />
              <span className="nav-item-name">Search</span>
            </div>
          </Link>

          <Link to="#">
            <div className="nav-item">
              <MdPushPin />
              <span className="nav-item-name">Tags</span>
            </div>
          </Link>

          <Link to="#">
            <div className="nav-item">
              <MdInsertChartOutlined />
              <span className="nav-item-name">Reports</span>
            </div>
          </Link>
        </div>
      </Router>
    </div>
  );
};

export default Sidebar;
