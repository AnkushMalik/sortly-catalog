import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

const Table = ({ tableData, columnData }) => {
  const table = useReactTable({
    tableData,
    columnData,
    getCoreRowModel: getCoreRowModel(),
  });

  React.useEffect(() => {
    console.log(table.getHeaderGroups());
  });

  return (
    <>
      <table>
        <thead>
          {
            // table.getHeaderGroups().map((headerGroup) => (
            // <>H</>
            // <tr key={headerGroup.id}>
            //   {headerGroup.headers.map((header) => (
            //     <th key={header.id}>
            //       {header.isPlaceholder
            //         ? null
            //         : flexRender(
            //             header.column.columnDef.header,
            //             header.getContext()
            //           )}
            //     </th>
            //   ))}
            // </tr>
            // ))
          }
        </thead>
        {/* <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
    </>
  );
};

export default Table;
