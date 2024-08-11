import { OneOfPlayerType } from "@/types/type.d";
import S from "./Status.module.css";

Status.propTypes = {
    winner: OneOfPlayerType,
    next: OneOfPlayerType.isRequired,
};

export default function Status({ winner, next }) {
    if (winner) {
        return <h2 className={S.winner}>Winner : {winner}</h2>;
    }
    return <h2 className={S.component}>Player : {next}</h2>;
}
