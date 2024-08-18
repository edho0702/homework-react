import S from "./AddButton.module.css";

export default function AddButton() {
    return (
        <div className={S.con}>
            <button className={S.btn}>+ 생각났어</button>
        </div>
    );
}
