export const PLAYER = {
    ONE: "🐴",
    TWO: "🐮",
};

export const SQUARES = Array(9).fill(null);

export const COUNT = Object.keys(PLAYER).length;

export const GAMEOVER = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
