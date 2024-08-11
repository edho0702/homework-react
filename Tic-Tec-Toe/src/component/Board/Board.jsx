import { gameWinner, COUNT, PLAYER, SQUARES, WIN } from "@/constants";
import Square from "./../Square/Square";
import S from "./Board.module.css";
import { useState } from "react";

function Board() {
    const [squares, setSquares] = useState(SQUARES);

    const Play = (index) => () => {
        // const winner = gameWinner(squares);
        // console.log(winner);

        setSquares((prevSquares) => {
            const next = prevSquares.map((square, idx) => {
                return idx === index ? player : square;
            });
            return next;
        });
    };

    const winner = gameWinner(squares);

    const game = squares.filter(Boolean).length;

    const turn = game % COUNT === 0;

    const player = turn ? PLAYER.ONE : PLAYER.TWO;

    return (
        <div className={S.component}>
            {squares.map((square, index) => {
                const winnerStyles = {
                    backgroundColor: null,
                };
                if (winner) {
                    const [x, y, z] = winner.condition;

                    if (index === x || index === y || index === z) {
                        winnerStyles.backgroundColor = WIN;
                    }
                }

                return (
                    <Square
                        key={index}
                        style={winnerStyles}
                        onplay={Play(index)}
                    >
                        {square}
                    </Square>
                );
            })}
        </div>
    );
}

export default Board;
