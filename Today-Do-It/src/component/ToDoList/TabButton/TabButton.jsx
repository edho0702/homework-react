import S from "./TabButton.module.css";

export default function TabButton({ todoList, setFilter, currentFilter }) {
    const todoDoneList = todoList.filter((f) => f.isTodo);
    const keepTodoList = todoList.filter((f) => f.isKeep);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div className={S.con}>
            <div className={S.all}>
                <label htmlFor="All">모두</label>
                <button
                    id="All"
                    onClick={() => handleFilterChange("All")}
                    className={currentFilter === "All" ? S.active : ""}
                >
                    {todoList.length}
                </button>
            </div>
            <span className={S.line}>{" | "}</span>
            <div className={S.tab}>
                <label htmlFor="Todo">할일</label>
                <button
                    id="Todo"
                    onClick={() => handleFilterChange("Todo")}
                    className={currentFilter === "Todo" ? S.active : ""}
                >
                    {todoList.length - todoDoneList.length}
                </button>
            </div>
            <div className={S.tab}>
                <label htmlFor="Doit">한일</label>
                <button
                    id="Doit"
                    onClick={() => handleFilterChange("Doit")}
                    className={currentFilter === "Doit" ? S.active : ""}
                >
                    {todoDoneList.length}
                </button>
            </div>
            <div className={S.tab}>
                <label htmlFor="Keep">보관</label>
                <button
                    id="Keep"
                    onClick={() => handleFilterChange("Keep")}
                    className={currentFilter === "Keep" ? S.active : ""}
                >
                    {keepTodoList.length}
                </button>
            </div>
        </div>
    );
}
