import React from "react";
import Item from "./item";

const ListItems = ({ items, removeItem = null }) => {
  console.log("is remove", removeItem === null ? "Completed.." : "Pending...");

  return (
    <>
      {items.map((item, index) => (
        <Item key={index} item={item} removeItem={removeItem} />
      ))}
    </>
  );
};

export default React.memo(ListItems);
