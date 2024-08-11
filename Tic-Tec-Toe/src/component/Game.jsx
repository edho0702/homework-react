import Board from "./Board";
import Status from "./Status";
import History from "./History";

export default function Gmae() {
    return (
        <>
            <h1>Tic-Tec-Toe</h1>
            <Status />
            <Board />
            <History />
        </>
    );
}
