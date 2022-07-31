import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import inputReducer from "./inputSlice";
import word1Reducer from "./word1Slice";
import word2Reducer from "./word2Slice";
import word3Reducer from "./word3Slice";
import word4Reducer from "./word4Slice";
import word5Reducer from "./word5Slice";
import word6Reducer from "./word6Slice";
import word7Reducer from "./word7Slice";
import word8Reducer from "./word8Slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: inputReducer,
    word1: word1Reducer,
    word2: word2Reducer,
    word3: word3Reducer,
    word4: word4Reducer,
    word5: word5Reducer,
    word6: word6Reducer,
    word7: word7Reducer,
    word8: word8Reducer,
  },
});