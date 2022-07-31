// import "./crossword.css";
import Cell from "./cell";
function CrossWord() {
  return (
    //透明にしたい場合はpropsにdisabled="disabled"を与える
    //class追加したい場合はpropsにclassName="要素"を与える
    //答えとなる文字のCellにはwordNo="値"を入れる
    //ToDo input入力後に次のセルに
    <>
        <div className="row1">
          <Cell wordNo="1" />
          <Cell wordNo="2" />
          <Cell wordNo="3" />
          <Cell wordNo="4" />
          <Cell wordNo="5" />
          <Cell wordNo="6" />
          <Cell wordNo="7" />
          <Cell wordNo="8" />
          <Cell disabled="disabled" />
          <Cell />
        </div>
        <div className="row2">
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
    </>
  );
}

export default CrossWord;
