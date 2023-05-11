import React from "react";
import Button from "src/components/Button/Button";
import { MdAddBox, MdClose, MdEditDocument } from "react-icons/md";
import Modal from "src/components/Modal/Modal";
import Table from "src/components/Table/Table.tsx";
import Input from "src/components/Input/Input";

import { tableData } from "src/config/tableData";
import { itemData } from "src/config/itemData";
import "./pages.scss";

const AllItems = () => {
  const [data, SetData] = React.useState(tableData);
  const [modalState, SetModalState] = React.useState(false);
  const [itemConfig, SetItemConfig] = React.useState({ ...itemData });

  React.useEffect(() => {
    console.log("itemConfig>", itemConfig);
  }, [itemConfig]);

  const handleAddNew = () => SetModalState(true);

  const handleModalClose = () => SetModalState(false);

  const handleEdit = () => console.log("edit was clicked!");

  const handleFieldChange = (e, key) => {
    let newItem = itemConfig;
    if (key != "tags") {
      newItem[key] = e.target.value;
    } else {
      let tags = e.target.value.split(",");
      newItem[key] = tags;
    }
    SetItemConfig({ ...newItem });
  };

  const resetField = () => SetItemConfig({ ...itemData });

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
          <AddNewItem
            handleClose={handleModalClose}
            handleInputChange={handleFieldChange}
            secondaryHandler={resetField}
            dataBundle={itemConfig}
          />
        </Modal>
      </div>
    </div>
  );
};

const AddNewItem = ({
  handleClose,
  dataBundle,
  handleInputChange,
  primaryHandler,
  secondaryHandler,
}) => {
  return (
    <div className="newitem-form">
      <div className="newitem-form-head">
        <span className="title">Add Item</span>
        <span onClick={handleClose}>
          <MdClose />
        </span>
      </div>
      <div className="newitem-form-body">
        <div className="newitem-form-body-row">
          <Input
            placeHolder={"Name*"}
            inputType={"text"}
            bordered={false}
            handleOnChange={(e) => handleInputChange(e, "name")}
            inputValue={dataBundle?.name}
          />
        </div>
        <div className="newitem-form-body-row">
          <Input
            placeHolder={"Quantity*"}
            inputType={"number"}
            bordered={false}
            handleOnChange={(e) => handleInputChange(e, "qty")}
            inputValue={dataBundle?.qty || ""}
          />
          <Input
            placeHolder={"Min Level"}
            inputType={"number"}
            bordered={false}
            handleOnChange={(e) => handleInputChange(e, "minQty")}
            inputValue={dataBundle?.minQty || ""}
          />
        </div>
        <div className="newitem-form-body-row">
          <Input
            placeHolder={"Price, USD"}
            inputType={"number"}
            bordered={false}
            handleOnChange={(e) => handleInputChange(e, "price")}
            inputValue={dataBundle?.price || ""}
          />
          <Input
            placeHolder={"Tags (comma seprated)"}
            inputType={"string"}
            bordered={false}
            handleOnChange={(e) => handleInputChange(e, "tags")}
            inputValue={dataBundle?.tags.join()}
          />
        </div>
        <div className="newitem-form-body-row">
          <Input
            placeHolder={"Notes"}
            inputType={"string"}
            bordered={false}
            handleOnChange={(e) => handleInputChange(e, "notes")}
            inputValue={dataBundle?.notes}
          />
        </div>
        <div className="newitem-form-body-row">
          <Button buttonText={"Reset"} buttonAction={secondaryHandler} />
          <Button buttonText={"Submit"} />
        </div>
      </div>
    </div>
  );
};

export default AllItems;
