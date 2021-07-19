import React, { useContext } from "react";
import { INCREMENT, DECREMENT } from "../../reducer";
import AppContext from "../../context";

const Counter = () => {
  const { state, disPatch } = useContext(AppContext);

  console.log("Counter Called");

  return (
    <React.Fragment>
      <div>
        <h2>{state.counter}</h2>
        <button onClick={() => disPatch({ type: INCREMENT })}>
          {" "}
          Increment
        </button>
        <button onClick={() => disPatch({ type: DECREMENT })}>
          {" "}
          Decrement
        </button>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Counter);
