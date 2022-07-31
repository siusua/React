import React, { useState, useEffect } from "react";
import { word1Change } from "../redux/word1Slice";
import { word2Change } from "../redux/word2Slice";
import { word3Change } from "../redux/word3Slice";
import { word4Change } from "../redux/word4Slice";
import { word5Change } from "../redux/word5Slice";
import { word6Change } from "../redux/word6Slice";
import { word7Change } from "../redux/word7Slice";
import { word8Change } from "../redux/word8Slice";
import { useDispatch } from "react-redux";

function Cell(props) {
  const dispatch = useDispatch();
  const wordSize = 1;
  const [timer, setTimer] = useState(null);
  //disabled設定
  let disabled = props.disabled;
  //clss設定
  let cellClass = "cell ";
  if (props.className) cellClass += props.className;
  if (props.disabled) cellClass += props.disabled;

  let wordNo = props.wordNo;

  function event(e) {
    switch (wordNo) {
      case "1":
        dispatch(word1Change(e.target.value));
        break;
      case "2":
        dispatch(word2Change(e.target.value));
        break;
      case "3":
        dispatch(word3Change(e.target.value));
        break;
      case "4":
        dispatch(word4Change(e.target.value));
        break;
      case "5":
        dispatch(word5Change(e.target.value));
        break;
      case "6":
        dispatch(word6Change(e.target.value));
        break;
      case "7":
        dispatch(word7Change(e.target.value));
        break;
      case "8":
        dispatch(word8Change(e.target.value));
        break;
      default:
    }
    clearTimeout(timer);

    //input からfocusを外す対象を設定
    const target =  e.currentTarget;
    const newTimer = setTimeout(() => {
      // focusを外す
      target.blur();
    }, 800);
    setTimer(newTimer);
  }
  return (
    <>
      <input
        type="text"
        id=""
        className={cellClass}
        minLength={wordSize}
        maxLength={wordSize}
        disabled={disabled}
        onChange={event}
      />
    </>
  );
}

export default Cell;
