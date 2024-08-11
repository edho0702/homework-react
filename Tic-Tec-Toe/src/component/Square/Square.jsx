import { node, func, object } from "prop-types";
import S from "./Square.module.css";

Square.propTypes = {
    children: node,
    onplay: func,
    style: object,
};

function Square({ children, onplay, style }) {
    const isDisabled = !!children;

    return (
        <button
            className={S.component}
            style={style}
            onClick={onplay}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}
export default Square;
