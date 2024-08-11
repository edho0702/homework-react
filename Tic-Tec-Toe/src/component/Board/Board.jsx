import { PLAYER } from "@/constants";
import Square from "./../Square/Square";
import S from "./Board.module.css";

console.log(PLAYER);

export default function Board() {
    return (
        <div className={S.component}>
            <Square></Square>
            <Square>{PLAYER.ONE}</Square>
            <Square>{PLAYER.TWO}</Square>

            <Square></Square>
            <Square></Square>
            <Square></Square>

            <Square></Square>
            <Square></Square>
            <Square></Square>
        </div>
    );
}
