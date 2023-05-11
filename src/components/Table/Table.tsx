import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  setRowSelection,
  createColumnHelper,
} from "@tanstack/react-table";
import React from "react";

import "./styles.scss";

const columnHelper = createColumnHelper();

const Table = ({ tableData, editButton }) => {
  const [data, setData] = React.useState(tableData);
  const [rowSelection, setRowSelection] = React.useState({});

  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <>
          <div className="selector-cell">
            <IndeterminateCheckbox
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler(),
              }}
            />
            {Object.keys(rowSelection).length
              ? `${Object.keys(rowSelection).length} items selected`
              : null}
          </div>
        </>
      ),
      cell: ({ row }) => (
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      ),
    },
    columnHelper.accessor("name", {
      header: () => <span>NAME</span>,
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.qty, {
      id: "qty",
      header: () => <span>QUANTITY</span>,
      cell: (info) => <span>{info.renderValue()} units</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("price", {
      header: () => "PRICE",
      cell: (info) => (info.renderValue() ? info.renderValue() : "--"),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("tags", {
      header: () => "TAGS",
      cell: (info) => (
        <>
          {info.getValue()?.length > 0
            ? info.getValue().map((e, i) => <span key={i}>{e}</span>)
            : "--"}
        </>
      ),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("notes", {
      header: () => <span>NOTES</span>,
      cell: (info) => (info.getValue() ? info.getValue() : "--"),
      footer: (info) => info.column.id,
    }),
    {
      id: "Edit",
      header: ({ table }) => <>{editButton}</>,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
  });

  return (
    <>
      <div>{table.getIsSomeRowsSelected()}</div>
      <table className="catalog-table">
        <thead
          className={`catalog-table-head ${
            Object.keys(rowSelection).length ? "selected" : ""
          }`}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="catalog-table-body">
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

function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
}

export default Table;
