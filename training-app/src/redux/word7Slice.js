import { createSlice } from "@reduxjs/toolkit";

const word7 = createSlice({
  name: "word7",
  initialState: {
    value: "?",
  },
  reducers: {
    // actionを設定
    word7Change: (state,action) => {
      state.value = action.payload;
    },
  },
});

// actionを使用できるようにexportする
export const  { word7Change }  = word7.actions;
export default word7.reducer;