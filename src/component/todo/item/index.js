import React from "react";

const Item = ({ item, removeItem }) => {
  console.log("Item called");

  return removeItem ? (
    <p onClick={() => removeItem(item)}>{item.name}</p>
  ) : (
    <p>{item.name}</p>
  );
};

export default Item;
