import React, { useRef, useCallback, useEffect } from "react";
import Headline from "./Headline/Headline";
import ToDoList from "./ToDoList/ToDoList";

import S from "./App.module.css";

export default function App() {
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const dragInfo = useRef({ startY: 0, scrollTop: 0 });

    const handleMouseDown = useCallback((e) => {
        isDragging.current = true;
        dragInfo.current = {
            startY: e.pageY - containerRef.current.offsetTop,
            scrollTop: containerRef.current.scrollTop,
        };
        containerRef.current.style.cursor = "grabbing";
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!isDragging.current) return;
        const y = e.pageY - containerRef.current.offsetTop;
        const walk = (y - dragInfo.current.startY) * 2;
        containerRef.current.scrollTop = dragInfo.current.scrollTop - walk;
    }, []);

    const handleMouseUp = useCallback(() => {
        isDragging.current = false;
        containerRef.current.style.cursor = "grab";
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseup", handleMouseUp);
            container.addEventListener("mouseleave", handleMouseUp);

            return () => {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseup", handleMouseUp);
                container.removeEventListener("mouseleave", handleMouseUp);
            };
        }
    }, [handleMouseMove, handleMouseUp]);

    return (
        <div
            className={S.con}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            style={{ cursor: "grab" }}
        >
            <Headline />
            <div className={S.list}>
                <ToDoList />
            </div>
        </div>
    );
}
