import Rock from "../assets/rock.svg";
import Paper from "../assets/paper.svg";
import Scissor from "../assets/scissor.svg";
import { compareHand, generateRandomHand } from "../utils";
import { useState } from "react";

function Box() {
  const [history, setHistory] = useState([]);
  const [bet, setBet] = useState(1);

  const IMAGES = {
    rock: Rock,
    scissor: Scissor,
    paper: Paper,
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  return (
    <div class="Box App-box">
      <div class="Box-inner">
        <div class="App-hands">
          <div class="Hand">
            <img class="Hand-icon" src={IMAGES.rock} alt="rock" />
          </div>
          <div class="App-versus">VS</div>
          <div class="Hand">
            <img class="Hand-icon" src={IMAGES.rock} alt="rock" />
          </div>
        </div>
        <div class="App-bet">
          <span>배점</span>
          <input type="number" min="1" max="9" step="1" defaultValue={'1'} onChange={handleBetChange} />
          <span>배</span>
        </div>
        <div class="App-history">
          <h2>승부기록</h2>
          <p>{history}</p>
        </div>
      </div>
    </div>
  );
}

export default Box;
