//import React from "react";

import * as Action from "./action";

const initialState = {
  counter: 4,
  data: [1, 2, 3],
};

const reducer = (state = initialState, action) => {
  if (action.type === Action.INCREMENT)
    return { ...state, counter: state.counter + 1 };

  if (action.type === Action.DECREMENT)
    return { ...state, counter: state.counter - 1 };

  if (action.type === Action.PUSH_DATA)
    return { ...state, data: [...state.data, action.payload] };
  if (action.type === Action.POP_DATA) {
    state.data.pop();
    return { ...state, data: [...state.data] };
  }

  return state;
};

export default reducer;
