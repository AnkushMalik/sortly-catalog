import { Routes, Route } from "react-router-dom";
import Items from "src/pages/Items";
import Placeholder from "src/pages/Placeholder";
import "./styles.scss";

const Container = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/items" element={<Items />} />
        {["/dashboard", "/reports", "/tags", "/search"].map((path, index) => (
          <Route path={path} element={<Placeholder />} key={index} />
        ))}
      </Routes>
    </div>
  );
};

export default Container;
