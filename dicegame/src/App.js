import { useState } from "react";
import Board from "./components/Board";
import "./App.css";
import Logo from "./assets/logo.png";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [history, setHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const otherNextNum = random(6);

    setHistory([...history, nextNum]);
    setOtherHistory([...otherHistory, otherNextNum]);
  };

  const handleClearClick = () => {
    setHistory([]);
    setOtherHistory([]);
  };

  const total = history.reduce((a, b) => a + b, 0);
  const otherTotal = otherHistory.reduce((a, b) => a + b, 0);

  return (
    <div className={"App"}>
      <div>
        <div className={"App-logo"}>
          <img src={Logo} alt="로고 이미지" />
          <h1 className="App-title">주사위게임</h1>
        </div>

        <div>
          <div className={"App-button"}>
            <button
              className="Button blue App-button"
              onClick={handleRollClick}
            >
              던지기
            </button>
            <button
              className="Button red App-button"
              onClick={handleClearClick}
            >
              처음부터
            </button>
          </div>
        </div>
      </div>
      <div className={"App-boards"}>
        <Board
          className={"App-board" + (total > otherTotal ? " Board-winner" : "")}
          text="나"
          color={"blue"}
          num={history[history.length - 1]}
          history={history}
          total={total}
        />
        <Board
          className={"App-board" + (total < otherTotal ? " Board-winner" : "")}
          text="상대"
          color={"red"}
          num={otherHistory[history.length - 1]}
          history={otherHistory}
          total={otherTotal}
        />
      </div>
    </div>
  );
}

export default App;
