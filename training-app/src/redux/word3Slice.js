import { createSlice } from "@reduxjs/toolkit";

const word3 = createSlice({
  name: "word3",
  initialState: {
    value: "?",
  },
  reducers: {
    // actionを設定
    word3Change: (state,action) => {
      state.value = action.payload;
    },
  },
});

// actionを使用できるようにexportする
export const  { word3Change }  = word3.actions;
export default word3.reducer;