import React, { useReducer } from "react";
import reducer, { INCREMENT, DECREMENT, PUSH_DATA } from "../../reducer";

const Counter = () => {
  const [state, disPatch] = useReducer(reducer, {
    counter: 4,
    data: [1, 2, 3],
  });

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
      <hr />
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

export default Counter;
