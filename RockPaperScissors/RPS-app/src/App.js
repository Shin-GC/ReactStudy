import { useState } from "react";
import HandButton from "./HandButton";
import { compareHand, generateRandomHand } from "./utils";
import Reset from "./assets/ic-reset.svg";
import Score from "./components/Score";
import Rock from './assets/rock.svg';
import Scissor from './assets/scissor.svg';
import Paper from './assets/paper.svg';
import "./App.css";
const INITIAL_VALUE = "rock";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  const [winner, setWinner] = useState(-1);

  const IMAGES = {
    rock: Rock,
    scissor: Scissor,
    paper: Paper,
  };
  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) {
      setWinner(0)
      console.log(winner)
      setScore(score + bet)
    };
    if (comparison < 0) {
      setWinner(1)
      setOtherScore(otherScore + bet)
    };
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };



  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <img
        className="App-reset"
        src={Reset}
        alt="초기화"
        onClick={handleClearClick}
        style={{ cursor: "pointer" }}
      />
      <div className="App-scores">
        <Score name="나" score={score} />
        <div className="App-versus">:</div>
        <Score name="상대" score={otherScore} />
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          <div className="App-hands">
            <div className={"Hand" + (winner === 0 ? " winner" : " ")}>
            <img className="Hand-icon" src={IMAGES[hand]} alt="rock" />
            </div>
            <div className="App-versus">VS</div>
            <div className={"Hand" + (winner === 1 ? " winner" : "")}>
            <img className="Hand-icon" src={IMAGES[otherHand]} alt="rock" />
            </div>
          </div>
          <div className="App-bet">
            <span>배점</span>
            <input type="number" min="1" max="9" step="1" defaultValue={'1'} onChange={handleBetChange}/>
            <span>배</span>
          </div>
          <div className="App-history">
            <h2>승부기록</h2>
            <p>{gameHistory.join(", ")}</p>
          </div>
        </div>
      </div>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
