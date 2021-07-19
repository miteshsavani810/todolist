//import React from "react";

export const INCREMENT = "Increment";
export const DECREMENT = "Decrement";
export const SETVALUE = "setValue";

const reducer = (state, action) => {
  if (action.type === INCREMENT)
    return { ...state, counter: state.counter + 1 };

  if (action.type === DECREMENT)
    return { ...state, counter: state.counter - 1 };

  if (action.type === SETVALUE) {
    console.log("action", action.payload);
    return { ...state, counter: action.payload };
  }

  return state;
};

export default reducer;
