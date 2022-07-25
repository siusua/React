import { createSlice } from "@reduxjs/toolkit";

export const templateSlice = createSlice({
  name: 'template',
  initialState: {
    value: "template",
  },
  reducers: {
    // actionを設定
    templateAction: (state) => {
      state.value += 1;
    },
  },
});

// actionを使用できるようにexportする
export const { templateAction } = templateSlice.actions;
export default templateSlice.reducer;