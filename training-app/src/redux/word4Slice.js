import { createSlice } from "@reduxjs/toolkit";

const word4 = createSlice({
  name: "word4",
  initialState: {
    value: "?",
  },
  reducers: {
    // actionを設定
    word4Change: (state,action) => {
      state.value = action.payload;
    },
  },
});

// actionを使用できるようにexportする
export const  { word4Change }  = word4.actions;
export default word4.reducer;