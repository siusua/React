import { createSlice } from "@reduxjs/toolkit";

const word5 = createSlice({
  name: "word5",
  initialState: {
    value: "?",
  },
  reducers: {
    // actionを設定
    word5Change: (state,action) => {
      state.value = action.payload;
    },
  },
});

// actionを使用できるようにexportする
export const  { word5Change }  = word5.actions;
export default word5.reducer;