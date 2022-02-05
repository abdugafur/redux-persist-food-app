import React from "react";
import "./styles.css";

const ButtonAddRemoveItem = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <div className="btn-add-remove">
      {quantity !== 0 ? (
        <div className="btn-add-remove-positive">
          <i
            class="fa fa-minus"
            aria-hidden="true"
            onClick={handleRemoveItem}
          ></i>
          <span> {quantity}</span>
          <i class="fa fa-plus" aria-hidden="true" onClick={handleAddItem}></i>
        </div>
      ) : (
        <div onClick={handleAddItem} className="btn-add-remove-negative">
          <span>ADD</span>
          <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
      )}
    </div>
  );
};

export default ButtonAddRemoveItem;
