import "./styles.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={require("src/assets/logo.png")} className="logo" alt="logo" />
      <div className="nav">{/* routing links */}</div>
    </div>
  );
};

export default Sidebar;
