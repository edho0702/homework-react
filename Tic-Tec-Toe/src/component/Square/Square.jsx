import { node, func } from "prop-types";
import S from "./Square.module.css";

Square.propTypes = {
    children: node,
    onplay: func,
};

function Square({ children, onplay }) {
    const isDisabled = !!children;

    return (
        <button className={S.component} onClick={onplay} disabled={isDisabled}>
            {children}
        </button>
    );
}
export default Square;
