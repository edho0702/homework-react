import { useId } from "react";
import S from "./ListCard.module.css";

export default function ListCard({ todo, todoList, setTodoList }) {
    const titleId = useId();
    const keepboxId = useId();

    const handleCheckTodo = (e) => {
        const checked = e.target.checked;

        const newTodoList = todoList.map((item) => {
            if (todo.id === item.id) {
                return {
                    ...item,
                    isTodo: checked,
                    isKeep: checked ? item.isKeep : false,
                };
            }
            return item;
        });

        setTodoList(newTodoList);
    };

    const handleCheckKeep = (e) => {
        const checked = e.target.checked;
        const newTodoList = todoList.map((item) => {
            if (todo.id === item.id) {
                return {
                    ...item,
                    isKeep: checked,
                    isTodo: checked ? true : item.isTodo,
                };
            }
            return item;
        });

        setTodoList(newTodoList);
    };

    return (
        <div className={S.card}>
            <div className={S.todowrap}>
                <div className={S.todo}>
                    <label
                        htmlFor={titleId}
                        style={{
                            textDecoration: todo.isTodo
                                ? "line-through"
                                : "none",
                        }}
                    >
                        {todo.title}
                    </label>
                    <span className={S.span}>{todo.description}</span>
                </div>
                <div>
                    <input
                        id={titleId}
                        type="checkbox"
                        checked={todo.isTodo}
                        onChange={handleCheckTodo}
                        className={S.checkbox}
                    />
                </div>
            </div>

            <hr />
            <div className={S.date}>
                <div className={S.label}>
                    <label htmlFor={keepboxId} className={S.label}>
                        {todo.date}
                    </label>
                    <p>{todo.time}</p>
                </div>
                <input
                    id={keepboxId}
                    type="checkbox"
                    onChange={handleCheckKeep}
                    checked={todo.isKeep}
                    className={S.keepbox}
                />
            </div>
        </div>
    );
}
