import React, { useReducer } from "react";
import reducer from "./reducer";
import Counter from "./component/counter";
import ArrayData from "./component/arrayData";
import { AppProvider } from "./context";

const ReducerApp = () => {
  const [state, disPatch] = useReducer(reducer, {
    counter: 4,
    data: [1, 2, 3],
  });

  return (
    <AppProvider value={{ state, disPatch }}>
      <React.Fragment>
        <Counter />
        <hr />
        <ArrayData />
      </React.Fragment>
    </AppProvider>
  );
};

export default ReducerApp;
