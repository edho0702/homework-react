import { PLAYER, COUNT, SQUARES } from "@/constants";
import Square from "./../Square/Square";
import S from "./Board.module.css";
import { useState } from "react";

function Board() {
    const [squares, setSquares] = useState(SQUARES);

    const Play = (index) => {
        setSquares((prevSquares) => {
            const next = prevSquares.map((square, squareIndex) => {
                if (squareIndex === index) {
                    return currentPlayer;
                }
                return square;
            });
            return next;
        });
    };

    const game = squares.filter(Boolean).length % COUNT;

    const currentPlayer = game === 0 ? PLAYER.ONE : PLAYER.TWO;

    return (
        <div className={S.component}>
            {squares.map((square, index) => {
                return (
                    <Square key={index} onplay={() => Play(index)}>
                        {square}
                    </Square>
                );
            })}
        </div>
    );
}

export default Board;
