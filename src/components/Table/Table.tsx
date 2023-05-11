import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  setRowSelection,
  createColumnHelper,
} from "@tanstack/react-table";
import React from "react";
import Button from "../Button/Button";
import { MdEditDocument, MdClose } from "react-icons/md";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";

import "./styles.scss";

const columnHelper = createColumnHelper();

type Item = {
  name: string;
  qty: number;
  minQty: number;
  price: number;
  tags: string[];
  notes: string;
};

const initUpdateFields = {
  qty: null,
  minQty: null,
  notes: "",
};

const Table = ({ tableData, editRowMethod }) => {
  const [data, setData] = React.useState(tableData);
  const [showColumnEdit, SetShowColumnEdit] = React.useState(false);
  const [rowSelection, setRowSelection] = React.useState({});
  const [updateModalState, SetUpdateModalState] = React.useState(false);
  const [updateRowFields, SetUpdateRowFields] =
    React.useState(initUpdateFields);

  React.useEffect(() => {
    setData(tableData);
  }, [tableData]);

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
      header: ({ table }) => (
        <>
          {console.log("#>>", table.getSelectedRowModel().flatRows[0])}
          {Object.keys(rowSelection).length > 0 ? (
            <Button
              buttonAction={() => SetUpdateModalState(true)}
              buttonText={"Edit"}
              buttonIcon={<MdEditDocument />}
              buttonType={"secondary"}
            />
          ) : (
            <Button
              buttonAction={() => SetShowColumnEdit(!showColumnEdit)}
              buttonText={"Edit"}
              buttonIcon={<MdEditDocument />}
              buttonType={"secondary"}
            />
          )}

          {showColumnEdit && (
            <div className="column-edit">
              {table.getAllLeafColumns().map((column) => {
                return ["price", "tags", "notes"].includes(column.id) ? (
                  <div key={column.id}>
                    <label>
                      <input
                        {...{
                          type: "checkbox",
                          checked: column.getIsVisible(),
                          onChange: column.getToggleVisibilityHandler(),
                        }}
                      />{" "}
                      {column.id}
                    </label>
                  </div>
                ) : (
                  <></>
                );
              })}
            </div>
          )}
        </>
      ),
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

  const handleRowUpdate = () => {};

  return (
    <>
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
      <Modal modalState={updateModalState}>
        <UpdateItem
          dataBundle={updateRowFields}
          handleClose={() => SetUpdateModalState(!updateModalState)}
        />
      </Modal>
    </>
  );
};

const IndeterminateCheckbox = ({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
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
};

const UpdateItem = ({
  handleClose,
  dataBundle,
  primaryHandler,
  secondaryHandler,
}) => {
  return (
    <div className="newitem-form update-form">
      <div className="newitem-form-head">
        <span className="title">Update Item</span>
        <span onClick={handleClose}>
          <MdClose />
        </span>
      </div>
      <div className="newitem-form-body">
        <div className="newitem-form-body-row">
          <Input
            placeHolder={"Quantity*"}
            inputType={"number"}
            inputValue={dataBundle.qty}
          />
          <Input
            placeHolder={"Min Level"}
            inputType={"number"}
            inputValue={dataBundle.minQty}
          />
        </div>
        <div className="newitem-form-body-row">
          <Input
            placeHolder={"Notes"}
            inputType={"string"}
            inputValue={dataBundle.notes}
          />
        </div>
        <div className="newitem-form-body-row">
          <Button buttonText={"Reset"} buttonAction={secondaryHandler} />
          <Button buttonText={"Submit"} buttonAction={primaryHandler} />
        </div>
      </div>
    </div>
  );
};

export default Table;
