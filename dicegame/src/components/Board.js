import Dice from './Dice'
import '../static/css/Board.css'

const Board = ({text = '', color = 'red', num = 1, history = [], className='', total=0}) => {
  return (
    <div className={`${className} Board `}>
      <h2 className="Board-heading">{text}</h2>
      <Dice color={color} num={num}/>
      <h2 className="Board-heading">기록</h2>
      <p>{history.join(', ')}</p>
      <h2 className="Board-heading">총점</h2>
      <p>{total}</p>
    </div>
  )
}

export default Board