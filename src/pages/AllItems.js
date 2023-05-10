import React from "react";
import Button from "src/components/Button/Button";
import { MdAddBox, MdClose } from "react-icons/md";
import Modal from "src/components/Modal/Modal";
import Table from "src/components/Table/Table";

import { tableData, columnData } from "src/config/tableData";
import "./pages.scss";

const AllItems = () => {
  const [modalState, SetModalState] = React.useState(false);
  const [data, setData] = React.useState(tableData);

  const handleAddNew = () => SetModalState(true);

  const handleModalClose = () => SetModalState(false);

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
          <Table tableData={data} columnData={columnData} />
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
