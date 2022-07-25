import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "inputMessage",
  initialState: {
    value: "message",
  },
  reducers: {
    // actionを設定
    textChange: (state,action) => {
      state.value = action.payload;
    },
  },
});

// actionを使用できるようにexportする
export const  {textChange}  = inputSlice.actions;
export default inputSlice.reducer;