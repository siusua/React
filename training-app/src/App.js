import "./App.css";
// import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";
import { textChange } from "./redux/inputSlice";
import CrossWord from "./components/crossword";
import MediaQuery from "react-responsive";
import "./components/crossword.css";
function App() {
  const count = useSelector((state) => state.counter.value);
  const message = useSelector((state) => state.text.value);
  const word1 = useSelector((state) => state.word1.value);
  const word2 = useSelector((state) => state.word2.value);
  const word3 = useSelector((state) => state.word3.value);
  const word4 = useSelector((state) => state.word4.value);
  const word5 = useSelector((state) => state.word5.value);
  const word6 = useSelector((state) => state.word6.value);
  const word7 = useSelector((state) => state.word7.value);
  const word8 = useSelector((state) => state.word8.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        ----
        <input
          type="text"
          onChange={(e) => dispatch(textChange(e.target.value))}
        />
        {message}
      </div>
      <MediaQuery query="(max-width: 767px)">
        {/* iPadの横幅を分岐点にしている */}
        <div>ここにスマートフォン向けの要素を書く</div>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        {/* iPadの横幅を分岐点にしている */}
        <div>ここにPC向けの要素を書く</div>
      </MediaQuery>
      <div className="CrossWordArea">
        <CrossWord />
      </div>
      ひびこれこうじつ
      {word1}{word2}{word3}{word4}{word5}{word6}{word7}{word8}
    </>
  );
}

export default App;
