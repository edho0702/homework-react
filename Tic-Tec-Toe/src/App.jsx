import Game from "./component/Game/Game";
import History from "./component/History/History";
import S from "./App.module.css";

function App() {
    return (
        <div className={S.component}>
            <Game />
            <History />
        </div>
    );
}

export default App;
