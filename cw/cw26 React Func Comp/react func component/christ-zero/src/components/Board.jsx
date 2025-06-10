import Square from './Square'
function Board({squares, onSquareClick}) {
    console.log(squares);
    
    return ( 
        <div className="board">
            {squares.map((value, i)=>(
                <Square key={i} value={value} onClick={() => onSquareClick(i)}/>
            ))}
        </div>
    );
}

export default Board;