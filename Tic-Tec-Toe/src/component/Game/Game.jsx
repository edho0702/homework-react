import Board from "../Board/Board";
import Status from "../Status/Status";

import S from "./Game.module.css";

export default function Game() {
    return (
        <div className={S.component}>
            <h1>Tic-Tec-Toe</h1>
            <Status />
            <Board />
        </div>
    );
}
