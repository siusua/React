import { createSlice } from "@reduxjs/toolkit";

const word8 = createSlice({
  name: "word8",
  initialState: {
    value: "?",
  },
  reducers: {
    // actionを設定
    word8Change: (state,action) => {
      state.value = action.payload;
    },
  },
});

// actionを使用できるようにexportする
export const  { word8Change }  = word8.actions;
export default word8.reducer;