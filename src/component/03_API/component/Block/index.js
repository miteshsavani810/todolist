import React from "react";

const Block = ({ data }) => {
  console.log("Basket", data);
  return (
    <>
      <div>
        <h4> Block </h4>
        <p>{data.username}</p>
        <p>{data.lastname}</p>
        <p>{data.age}</p>
      </div>
    </>
  );
};

export default Block;
