import { createSlice } from "@reduxjs/toolkit";

const word6 = createSlice({
  name: "word6",
  initialState: {
    value: "?",
  },
  reducers: {
    // actionを設定
    word6Change: (state,action) => {
      state.value = action.payload;
    },
  },
});

// actionを使用できるようにexportする
export const  { word6Change }  = word6.actions;
export default word6.reducer;