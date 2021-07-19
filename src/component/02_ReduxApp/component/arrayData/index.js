import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Push_New_Data, Remove_Last_Data } from "../../reducer/action";

const ArrayData = () => {
  //console.log("Array Data called");

  const data = useSelector((state) => {
    return state.data;
  });

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div>
        <h3>{data.reduce((acc, d) => `${acc} ${d}`, "")}</h3>
        <button onClick={() => dispatch(Push_New_Data())}>push data</button>

        <button onClick={() => dispatch(Remove_Last_Data())}>
          Remove Data
        </button>
      </div>
    </React.Fragment>
  );
};

export default ArrayData;
