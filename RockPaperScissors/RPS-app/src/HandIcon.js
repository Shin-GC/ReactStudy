import Rock from './assets/rock.svg';
import Scissor from './assets/scissor.svg';
import Paper from './assets/paper.svg';
import "./App.css"

const IMAGES = {
  rock: Rock,
  scissor: Scissor,
  paper: Paper,
};

// className prop을 추가하고, img 태그에 적용해주세요
function HandIcon({ value }) {
  const src = IMAGES[value];
  return <img className='HandButton-icon' src={src} alt={value} />;
}

export default HandIcon;
