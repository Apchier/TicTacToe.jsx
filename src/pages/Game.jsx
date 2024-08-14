import { useState } from "react"
import Square from "../components/elements/Square";
import calculateWinner from "../components/elements/Calculate";
import Board from "../components/layouts/Board";

Square

Board

calculateWinner

export default function Game() {
    const [isXNext, setXIsNext] = useState(true)
    const [history,setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquares = history[currentMove]

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
        setXIsNext(nextMove % 2 === 0)
    }

    function handlePlay(newSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), newSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
        setXIsNext(!isXNext)
    }

    const moves = history.map((squares, move) => {
        let description = ''
        if (move) {
            description = 'Pergi ke langkah #' + move
        } else {
            description = 'Start Game'
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <div className="flex gap-10">
            <div><Board xIsNext={isXNext} squares={currentSquares} onPlay={handlePlay}/></div>
            <div>
                <ol className="text-3xl">
                    {moves}
                </ol>
            </div>
        </div>
    )
}
