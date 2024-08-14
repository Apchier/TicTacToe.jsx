/* eslint-disable react/prop-types */
import { useState } from "react"
import { HiXMark } from "react-icons/hi2";
import { LiaCircleSolid } from "react-icons/lia";

function Square({ value, onSquareClick }) {
    return <button className="flex justify-center items-center w-[100px] h-[100px] border-2 border-gray-500 text-6xl rounded bg-gray-100 hover:bg-gray-200" onClick={onSquareClick}>{value === 'X' ? <HiXMark /> : value === 'O' ? <LiaCircleSolid /> : null}</button>
}

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return

        const newSquares = squares.slice()

        newSquares[i] = (xIsNext) ? 'X' : 'O'
        setSquares(newSquares)
        setXIsNext(!xIsNext)
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

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return false
}
