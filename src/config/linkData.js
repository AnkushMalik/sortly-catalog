import {
  MdOutlineDashboard,
  MdOutlineInventory2,
  MdSearch,
  MdPushPin,
  MdInsertChartOutlined,
} from "react-icons/md";

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

export default LinkData;
