export const PLAYER = {
    ONE: "🐴",
    TWO: "🐮",
};
export const PLAYERLIST = Object.values(PLAYER);

export const SQUARES = Array(9).fill(null);

export const COUNT = Object.keys(PLAYER).length;

const GAMEOVER = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export const WIN = "green";

export const gameWinner = (squares) => {
    let winnerInfo = null;

    for (const [x, y, z] of GAMEOVER) {
        // console.log({ x, y, z });
        const winner = squares[x];

        if (winner && winner === squares[y] && winner === squares[z]) {
            console.log("GAME OVER");
            winnerInfo = {
                winner,
                condition: [x, y, z],
            };

            break;
        }
    }

    return winnerInfo;
};
