import { oneOf, arrayOf, shape, number } from "prop-types";
import { PLAYERLIST } from "../constants";

export const OneOfPlayerType = oneOf(PLAYERLIST);
export const oneOfPlayerListType = arrayOf(OneOfPlayerType);
export const WinnerInfoType = shape({
    winner: OneOfPlayerType,
    condition: arrayOf(number),
});
