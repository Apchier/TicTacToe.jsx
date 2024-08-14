/* eslint-disable react/prop-types */
import calculateWinner from "../elements/Calculate"
import Square from "../elements/Square"

Square
calculateWinner

function Board({ xIsNext, squares, onPlay }) {

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return

        const newSquares = squares.slice()

        newSquares[i] = (xIsNext) ? 'X' : 'O'

        onPlay(newSquares)
    }

    const winner = calculateWinner(squares)
    let status = ''
    if (winner) {
        status = 'Winner: ' + winner
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }

    console.log(winner)

    return (
        <div className="flex flex-col gap-5">
            <div className="text-4xl">{status}</div>
            <div className="flex flex-wrap w-[300px] aspect-square">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    )
}

export default Board