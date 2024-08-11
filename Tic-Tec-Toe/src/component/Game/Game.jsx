import { useState } from "react";
import Board from "../Board/Board";
import Status from "../Status/Status";

import S from "./Game.module.css";
import { COUNT, gameWinner, PLAYER, SQUARES } from "@/constants";

export default function Game() {
    const [squares, setSquares] = useState(SQUARES);

    const gamePlay = (index) => () => {
        if (winner) {
            alert("GAME OVER");
            return;
        }

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
            <h1>Tic-Tec-Toe</h1>
            <Status winner={winner?.winner} next={player} />
            <Board squares={squares} winnerInfo={winner} onPlay={gamePlay} />
        </div>
    );
}
