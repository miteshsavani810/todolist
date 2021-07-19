import React, { useContext } from "react";
import { PUSH_DATA } from "../../reducer";
import AppContext from "../../context";

const ArrayData = () => {
  const { state, disPatch } = useContext(AppContext);
  return (
    <React.Fragment>
      <div>
        <h3>{state.data.reduce((acc, d) => `${acc} ${d}`, "")}</h3>
        <button
          onClick={() =>
            disPatch({
              type: PUSH_DATA,
              payload: Math.round(Math.random() * 20),
            })
          }
        >
          push data
        </button>
      </div>
    </React.Fragment>
  );
};

export default ArrayData;
