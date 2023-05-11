import React from "react";
import Button from "src/components/Button/Button";
import { MdAddBox, MdClose } from "react-icons/md";
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

  const handleAddNew = () => SetModalState(true);

  const handleModalClose = () => SetModalState(false);

  const handleFieldChange = (e, key) => {
    let newItem = itemConfig;
    if (key == "tags") {
      let tags = e.target.value.split(",");
      newItem[key] = tags;
    } else if (["name", "notes"].includes(key)) {
      newItem[key] = e.target.value;
    } else {
      newItem[key] = parseInt(e.target.value);
    }
    SetItemConfig({ ...newItem });
  };

  const resetField = () => SetItemConfig({ ...itemData });

  const handleAddNewItem = () => {
    SetData([...data, itemConfig]);
    handleModalClose();
    resetField();
  };

  const handleSearch = (e) => {
    let query = e.target.value;
    let result = tableData.filter((e) => e.name.includes(query));

    SetData(result);
  };

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
        <div class="search-container">
          <Input
            placeHolder={"Search All Items"}
            inputType={"text"}
            bordered={true}
            handleOnChange={handleSearch}
          />
        </div>
        <div>
          <Table
            tableData={data}
            editRowMethod={() => SetUpdateModalState(!updateModalState)}
          />
        </div>
        <Modal modalState={modalState}>
          <AddNewItem
            handleClose={handleModalClose}
            handleInputChange={handleFieldChange}
            primaryHandler={handleAddNewItem}
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
            errorMessage={
              dataBundle?.name == "" ||
              dataBundle?.name.length < 6 ||
              dataBundle?.name.length > 30
                ? "Name can't be blank; Name should be between 6 and 30 chars"
                : ""
            }
          />
        </div>
        <div className="newitem-form-body-row">
          <Input
            placeHolder={"Quantity*"}
            inputType={"number"}
            handleOnChange={(e) => handleInputChange(e, "qty")}
            inputValue={dataBundle?.qty || ""}
            errorMessage={
              dataBundle?.qty < 0 || dataBundle?.qty == null
                ? "Qty should be positive or zero"
                : ""
            }
          />
          <Input
            placeHolder={"Min Level"}
            inputType={"number"}
            handleOnChange={(e) => handleInputChange(e, "minQty")}
            inputValue={dataBundle?.minQty || ""}
            errorMessage={
              dataBundle?.minQty < 0 || dataBundle.minQty == null
                ? "Min Qty should be positive or zero"
                : ""
            }
          />
        </div>
        <div className="newitem-form-body-row">
          <Input
            placeHolder={"Price, USD"}
            inputType={"number"}
            handleOnChange={(e) => handleInputChange(e, "price")}
            inputValue={dataBundle?.price || ""}
            errorMessage={!dataBundle?.price ? "Price should be a number" : ""}
          />
          <Input
            placeHolder={"Tags (comma seprated)"}
            inputType={"string"}
            handleOnChange={(e) => handleInputChange(e, "tags")}
            inputValue={dataBundle?.tags.join()}
          />
        </div>
        <div className="newitem-form-body-row">
          <Input
            placeHolder={"Notes"}
            inputType={"string"}
            handleOnChange={(e) => handleInputChange(e, "notes")}
            inputValue={dataBundle?.notes}
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

export default AllItems;
