import { useCallback, useEffect, useState } from "react";

export const winnerCombination = [
  [0,1,2,], [3,4,5,], [6,7,8,],
  [0,3,6,], [1,4,7,], [2,5,8,],
  [0,4,8,], [2,4,6,]
];

export function useGameState() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);
    const [xIsNext, setXIsNext] = useState(true);
    const status = winner 
                ? `Winner: ${winner}` 
                : squares.every(Boolean) 
                ? 'Dont have winner' 
                : `Next move: ${xIsNext?'X':'O'}`;
    
    function handleMove(i) {
        console.log('handleMove called width index:', i);
        if (squares[i] || winner) {
            return;
        }
        const newSqures = [...squares];
        newSqures[i] = xIsNext ? 'X' : 'O';
        setSquares(newSqures);
        setXIsNext(!xIsNext);
    };

    function resetGame() {
        setSquares(Array(9).fill(null));
        setWinner(null);
        setXIsNext(true);
    };

    const chackWinner = useCallback(()=>{
        for (const comb of winnerCombination) {
            const [a, b, c] = comb;
            if (
                squares[a] && 
                squares[a] === squares[b] && 
                squares[a] === squares[c]
            ) {
                return squares[a]
            }
        }
        return null;
    }, [squares]);

    useEffect(()=>{
        const winner = chackWinner();
        if (winner) {
            setWinner(winner)
        }
    }, [squares]);

    return {
        squares,
        winner,
        xIsNext,
        handleMove,
        resetGame,
        status
    }
}