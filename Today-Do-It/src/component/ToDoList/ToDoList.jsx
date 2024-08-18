import { useState } from "react";
import AddButton from "./AddButton/AddButton";
import ListCard from "./ListCard/ListCard";
import TabButton from "./TabButton/TabButton";
import S from "./ToDoList.module.css";

const todoDummy = [
    {
        id: 1,
        isTodo: false,
        isKeep: false,
        title: "동네 주민 모임",
        description:
            "동네 주민 정기 모임일, 저녁 식사 후, 모임 회의 가질 예정.",
        date: "오늘",
        time: "오후 07:00~09:30",
    },
    {
        id: 2,
        isTodo: false,
        isKeep: false,
        title: "쇼핑",
        description: "주간 식료품 구매하기",
        date: "내일",
        time: "오전 10:00~11:30",
    },
    {
        id: 3,
        isTodo: false,
        isKeep: false,
        title: "운동",
        description: "공원에서 조깅하기",
        date: "모레",
        time: "오전 06:00~07:00",
    },
];

export default function ToDoList() {
    const [todoList, setTodoList] = useState(todoDummy);
    const [filter, setFilter] = useState("All");

    const filteredTodoList = todoList.filter((todo) => {
        if (filter === "All") return true;
        if (filter === "Todo") return !todo.isTodo;
        if (filter === "Doit") return todo.isTodo;
        if (filter === "Keep") return todo.isKeep;
        return true;
    });

    return (
        <>
            <AddButton />
            <div className={S.con}>
                <TabButton
                    todoList={todoList}
                    setFilter={setFilter}
                    currentFilter={filter}
                />
                <div className={S.card}>
                    {filteredTodoList.map((todo) => (
                        <ListCard
                            key={todo.id}
                            todo={todo}
                            todoList={todoList}
                            setTodoList={setTodoList}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
