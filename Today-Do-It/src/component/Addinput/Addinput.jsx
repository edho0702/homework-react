export default function Addinput() {
    return (
        <div>
            <div>
                <label htmlFor="title">오늘 뭐할래?</label>
                <input id="title" type="text" placeholder="치맥 파티!" />;
            </div>
            <div>
                <label htmlFor="info">간단히 적어볼까?</label>
                <input
                    id="info"
                    type="text"
                    placeholder="오늘 베프가 집에 놀러오니까, 저녁에는 베프랑 테라스에서 치맥 파티닷!"
                />
                ;
            </div>
            <div>
                <label htmlFor="date">언제 할꺼야?</label>
                <select name="date" id="date">
                    <option value="">오전</option>
                    <option value="">오후</option>
                </select>
                <div>
                    <input type="text" placeholder="00:00" /> -
                    <input type="text" placeholder="00:00" />
                </div>
                <div>
                    <button>저장</button>
                    <button>취소</button>
                </div>
            </div>
        </div>
    );
}
