import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Board from './components/Board'
import './App.css'
import { useGameState } from './hooks/useGameState'
// const winnerCombination = [
//   [0,1,2,], [3,4,5,], [6,7,8,],
//   [0,3,6,], [1,4,7,], [2,5,8,],
//   [0,4,8,], [2,4,6,]
// ]


function App() {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [winner, setWinner] = useState(null);
  // const [xIsNext, setXIsNext] = useState(true);

  // function handleMove(i) {
  //   console.log('handleMove called width index:', i);
  //   if (squares[i] || winner) {
  //     return;
  //   }
  //   const newSqures = [...squares];
  //   newSqures[i] = xIsNext ? 'X' : 'O';
  //   setSquares(newSqures);
  //   setXIsNext(!xIsNext);
  // }
  // function resetGame() {
  //   setSquares(Array(9).fill(null));
  //   setWinner(null);
  //   setXIsNext(true)
  // }
  // const status = winner 
  //                 ? `Winner: ${winner}` 
  //                 : squares.every(Boolean) 
  //                 ? 'Dont have winner' 
  //                 : `Next move: ${xIsNext?'X':'O'}`;
  // function chackWinner() {
  //   for (const comb of winnerCombination) {
  //     const [a, b, c] = comb;
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //       return squares[a]
  //     }
  //   }
  //   return null;
  // }
  // const chackWinner = useCallback(()=>{
  //   for (const comb of winnerCombination) {
  //     const [a, b, c] = comb;
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //       return squares[a]
  //     }
  //   }
  //   return null;
  // }, [squares])
  // useEffect(()=>{
  //   const winner = chackWinner();
  //   if (winner) {
  //     setWinner(winner)
  //   }
  // }, [squares])

  const {status, squares, winner, handleMove, resetGame} = useGameState()
  return (
    <>
      <div className="game">
        <h1 className="status">{status}</h1>
        <Board squares={squares} onSquareClick={handleMove}></Board>
        {(winner || squares.every(Boolean)) && (<div className="winner">
          <button className="restart-btn" onClick={resetGame}>Restart Game</button>
        </div>)}
      </div>
    </>
  )
}

export default App
