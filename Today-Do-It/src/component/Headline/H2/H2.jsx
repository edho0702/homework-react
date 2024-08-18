import S from "./H2.module.css";

export default function H2() {
    const messages = [
        "우리, 오늘 뭐할까?",
        "오늘 일정 뭐야?",
        "오늘 할일 다 했어?",
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    return (
        <div className={S.con}>
            <h2>{randomMessage}</h2>
        </div>
    );
}
