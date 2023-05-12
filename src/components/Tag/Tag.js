import "./styles.scss";
import { MdOutlinePushPin } from "react-icons/md";

const Tag = ({ value }) => {
  return (
    <div className="custom-tag">
      <MdOutlinePushPin />
      <span>{value}</span>
    </div>
  );
};

export default Tag;
