import React from "react";
import Button from "src/components/Button/Button";
import { MdAddBox, MdClose, MdEditDocument } from "react-icons/md";
import Modal from "src/components/Modal/Modal";
import Table from "src/components/Table/Table.tsx";

import { tableData } from "src/config/tableData";
import "./pages.scss";

const AllItems = () => {
  const [data, SetData] = React.useState(tableData);
  const [modalState, SetModalState] = React.useState(false);

  const handleAddNew = () => SetModalState(true);

  const handleModalClose = () => SetModalState(false);

  const handleEdit = () => console.log("edit was clicked!");

  return (
    <div className="allitems page">
      <div className="allitems-container">
        <header>
          <h1>All Items</h1>
          <Button
            buttonAction={handleAddNew}
            buttonText="ADD NEW"
            buttonIcon={<MdAddBox />}
            buttonType="primary"
          />
        </header>
        <div>
          <input value="Search Field" />
        </div>
        <div>
          <Table
            tableData={data}
            editButton={
              <Button
                buttonAction={handleEdit}
                buttonText={"Edit"}
                buttonIcon={<MdEditDocument />}
                buttonType={"secondary"}
              />
            }
          />
        </div>
        <Modal modalState={modalState}>
          <AddNewItem handleClose={handleModalClose} />
        </Modal>
      </div>
    </div>
  );
};

const AddNewItem = ({ handleClose, handleSubmit }) => {
  return (
    <div className="addnewitem-form">
      <div className="addnewitem-form-head">
        <span className="title">Add Item</span>
        <span onClick={handleClose}>
          <MdClose />
        </span>
      </div>
      <div className="addnewitem-form-body">
        nameField
        <br />
        QTY FIELD | MINLEVEL FIELD <br />
        PRICE in USD <tb /> reset | submit
      </div>
    </div>
  );
};

export default AllItems;
