//import React from "react";

export const INCREMENT = "Increment";
export const DECREMENT = "Decrement";
export const PUSH_DATA = "PushData";

const reducer = (state, action) => {
  if (action.type === INCREMENT)
    return { ...state, counter: state.counter + 1 };

  if (action.type === DECREMENT)
    return { ...state, counter: state.counter - 1 };

  if (action.type === PUSH_DATA)
    return { ...state, data: [...state.data, action.payload] };

  return state;
};

export default reducer;
