import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Decrement_Counter, Increment_Counter } from "../../reducer/action";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, data } = useSelector((state) => state);

  let counterData = useMemo(() => {
    console.log("get counter data");
    return counter;
  }, [counter]);

  return (
    <React.Fragment>
      <div>
        <h2>{counterData}</h2>
        <button onClick={() => dispatch(Increment_Counter())}>Increment</button>
        <button onClick={() => dispatch(Decrement_Counter())}>Decrement</button>
      </div>
      <hr />
      <div>
        <h3> No of Data: {data.length} </h3>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Counter);
