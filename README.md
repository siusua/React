# React

React 学習用ブランチ

## React アプリの作成

npx create-react-app training-app
※アプリ名に大文字は使えない

## アプリの起動確認

    作成したディレクトリに移動し、アプリを起動
    cd training-app
    npm start

## ReactRedux を適用

1. ReactRedux のインストール
   npm install redux react-redux

2. toolkit のインストール
   npm install @reduxjs/toolkit

3. Slice の作成
   ・initialState,reducers,actions をひとまとまりにしたもの
   ※記述例
   ```
   import { createSlice } from "@reduxjs/toolkit";
   export const counterSlice = createSlice({
      name: 'counter',
      initialState: {
         value: 0,
      },
      reducers: {
         // actionを設定
         increment: (state) => {
            state.value += 1;
         },
         decrement: (state) => {
            state.value -= 1;
         },
      },
   });
   // actionを使用できるようにexportする。
   export const { increment, decrement } = counterSlice.actions;
   export default counterSlice.reducer;
   ```

4. store の作成
   ・reducer を記載する箇所
   ※記述例
   ```
   import { configureStore } from "@reduxjs/toolkit";
   import counterReducer from "./counterSlice";
   // storeを作成。このstoreをApp全体が見に来る
   export const store = configureStore({
      reducer: {
         // countReducerをcounterとして見れるように設定
         counter: counterReducer,
      },
   });
   ```

5. store の適用
Appから見れるようにする
index.jsに<Provider store={store}></Provider>を設定する

# 参考サイト
React公式：https://ja.reactjs.org/
ReactRedux公式：https://react-redux.js.org/
