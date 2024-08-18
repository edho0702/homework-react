import H2 from "./H2/H2";
import Logo from "./Logo/Logo";
import TodayDate from "./TodayDate/TodayDate";
import S from "./Headline.module.css";

export default function Headline() {
    return (
        <div className={S.con}>
            <Logo />

            <div className={S.h2}>
                <H2 />
                <TodayDate />
            </div>
        </div>
    );
}
