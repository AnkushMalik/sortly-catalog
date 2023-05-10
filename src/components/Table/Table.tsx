import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table";
import React from "react";

const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.qty, {
    id: "qty",
    header: () => <span>qty</span>,
    cell: (info) => <i>{info.renderValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("price", {
    header: () => "Price",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("tags", {
    header: () => "Tags",
    cell: (info) => (
      <>
        {info.getValue().map((e, i) => (
          <span key={i}>{e}</span>
        ))}
      </>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("notes", {
    header: () => <span>Notes</span>,
    footer: (info) => info.column.id,
  }),
];

const Table = ({ tableData }) => {
  const [data, setData] = React.useState(tableData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel()?.rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
