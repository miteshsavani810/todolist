import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducer";
import Counter from "./component/counter";
import ArrayData from "./component/arrayData";

const ReduxApp = () => {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <React.Fragment>
        <Counter />
        <hr />
        <ArrayData />
      </React.Fragment>
    </Provider>
  );
};

export default ReduxApp;
