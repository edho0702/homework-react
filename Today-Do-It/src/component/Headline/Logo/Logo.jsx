import logo from "@/assets/logo/logo.svg";
import S from "./Logo.module.css";

export default function Logo() {
    return (
        <div className={S.con}>
            <img className="logo" src={logo} alt="Logo" />
        </div>
    );
}
