import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const tableData = [
  {
    name: "pen",
    qty: 24,
    minQty: 10,
    price: 10,
    tags: ["blue", "stationary"],
    Notes: "fountain pens",
  },
  {
    name: "spoon",
    qty: 17,
    minQty: 20,
    price: 3.5,
    tags: ["silver", "kitchen", "metal"],
    Notes: "kitchen spoons",
  },
  {
    name: "forks",
    qty: 37,
    minQty: 20,
    price: 3.5,
    tags: ["silver", "kitchen", "metal"],
    Notes: "",
  },
  {
    name: "toothbrush",
    qty: 137,
    minQty: 40,
    price: 5,
    tags: [],
    Notes: "",
  },
  {
    name: "football",
    qty: 4,
    minQty: 10,
    price: 10,
    tags: ["sports"],
    Notes: "High Gloss PU Synthetic leather stitched with Collar ankle mesh",
  },
];

// export const columnData = [
//   columnHelper.accessor("name", {
//     cell: (info) => info.getValue(),
//     footer: (info) => info.column.id,
//   }),
//   // columnHelper.accessor((row) => row.lastName, {
//   //   id: "lastName",
//   //   cell: (info) => <i>{info.getValue()}</i>,
//   //   header: () => <span>Last Name</span>,
//   //   footer: (info) => info.column.id,
//   // }),
//   columnHelper.accessor("qty", {
//     header: () => "qty",
//     cell: (info) => info.renderValue(),
//     footer: (info) => info.column.id,
//   }),
//   columnHelper.accessor("price", {
//     header: () => <span>Visits</span>,
//     footer: (info) => info.column.id,
//   }),
//   columnHelper.accessor("tags", {
//     header: "Tags",
//     footer: (info) => info.column.id,
//   }),
//   columnHelper.accessor("notes", {
//     header: "Notes",
//     footer: (info) => info.column.id,
//   }),
// ];

export const columnData = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Quantity",
    accessor: "qty",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Notes",
    accessor: "notes",
  },
];
