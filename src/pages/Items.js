import React from "react";
import Button from "src/components/Button/Button";
import { MdAddBox } from "react-icons/md";
import Modal from "src/components/Modal/Modal";
import "./pages.scss";

const Items = () => {
  const [modalState, SetModalState] = React.useState(false);
  const handleAddNew = () => {
    SetModalState(true);
  };

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
        <Modal modalState={modalState}>
          <>Hey There</>
        </Modal>
      </div>
    </div>
  );
};

const AddNewItem = () => {
  
}

export default Items;
