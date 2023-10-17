import Main from "../../pages/main/main";

type AppProps = {
    offersCount: number;
    favoriteCount: number;
}

function App({offersCount, favoriteCount}: AppProps): JSX.Element {
    return (
        <Main offersCount={offersCount} favoriteCount={favoriteCount}/>
    );
}

export default App;