import S from "./TodayDate.module.css";

export default function TodayDate() {
    const today = new Date();

    const days = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
    ];

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = days[today.getDay()];

    const formattedDate = `${year}년 ${month}월 ${date}일 ${day}`;

    return <p className={S.con}>{formattedDate}</p>;
}
