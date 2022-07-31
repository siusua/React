import { createSlice } from "@reduxjs/toolkit";

const word2 = createSlice({
  name: "word2",
  initialState: {
    value: "?",
  },
  reducers: {
    // actionを設定
    word2Change: (state,action) => {
      state.value = action.payload;
    },
  },
});

// actionを使用できるようにexportする
export const  { word2Change }  = word2.actions;
export default word2.reducer;