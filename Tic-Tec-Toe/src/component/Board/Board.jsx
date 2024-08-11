import { WIN, PLAYERLIST } from "@/constants";
import Square from "./../Square/Square";
import S from "./Board.module.css";
import { func, number, arrayOf, oneOf, shape } from "prop-types";

const OneOfPlayerType = oneOf(PLAYERLIST);
const OneOfPlayerListType = arrayOf(OneOfPlayerType);
const WinnerInfoType = shape({
    winner: OneOfPlayerType,
    condition: arrayOf(number),
});

Board.propTypes = {
    squares: OneOfPlayerListType.isRequired,
    winnerInfo: WinnerInfoType,
    onPlay: func,
};

function Board({ squares, winnerInfo, onPlay }) {
    return (
        <div className={S.component}>
            {squares.map((square, index) => {
                const winnerStyles = {
                    backgroundColor: null,
                };
                if (winnerInfo) {
                    const [x, y, z] = winnerInfo.condition;

                    if (index === x || index === y || index === z) {
                        winnerStyles.backgroundColor = WIN;
                    }
                }

                return (
                    <Square
                        key={index}
                        style={winnerStyles}
                        onplay={onPlay(index)}
                    >
                        {square}
                    </Square>
                );
            })}
        </div>
    );
}

export default Board;
