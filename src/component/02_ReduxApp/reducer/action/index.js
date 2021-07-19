export const INCREMENT = "Increment";
export const DECREMENT = "Decrement";
export const RESET = "Reset";
export const PUSH_DATA = "PushData";
export const POP_DATA = "PopData";

export const Increment_Counter = () => ({ type: INCREMENT });
export const Decrement_Counter = () => ({ type: DECREMENT });
export const Reset_Counter = () => ({ type: RESET });

export const Push_New_Data = () => {
  return {
    type: PUSH_DATA,
    payload: Math.round(Math.random() * 20),
  };
};

export const Remove_Last_Data = () => ({ type: POP_DATA });
