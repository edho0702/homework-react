import Board from "./../Board/Board";
import Status from "./../Status/Status";
import History from "./../History/History";

export default function Game() {
    return (
        <div className="Game">
            <h1>Tic-Tec-Toe</h1>
            <Status />
            <Board />
            <History />
        </div>
    );
}
