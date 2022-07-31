import { createSlice } from "@reduxjs/toolkit";

const word1 = createSlice({
  name: "word1",
  initialState: {
    value: "?",
  },
  reducers: {
    // actionを設定
    word1Change: (state,action) => {
      state.value = action.payload;
    },
  },
});

// actionを使用できるようにexportする
export const  { word1Change }  = word1.actions;
export default word1.reducer;