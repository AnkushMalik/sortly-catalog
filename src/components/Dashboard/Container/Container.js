import { Routes, Route } from "react-router-dom";
import AllItems from "src/pages/AllItems";
import Placeholder from "src/pages/Placeholder";
import "./styles.scss";

const Container = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<AllItems />} />
        <Route path="/items" element={<AllItems />} />
        {["/dashboard", "/reports", "/tags", "/search"].map((path, index) => (
          <Route path={path} element={<Placeholder />} key={index} />
        ))}
      </Routes>
    </div>
  );
};

export default Container;
