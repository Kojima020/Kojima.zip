import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
// import ThemeToggle  from "./components/themeToggle/ThemeToggle";
import ThemePicker  from "./components/themePicker/ThemePicker";
import NavBar       from "./components/NavBar";
import Home         from "./pages/Home";
import Info         from "./pages/Info";
import Projetos     from "./pages/Projetos";
import "./App.css";
// import "./components/themePicker/Themes.css"

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                {/*<ThemeToggle/>*/}
                <ThemePicker/>
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>} />
                    <Route element={<Home/>}      path="/home" />
                    <Route element={<Projetos/>}  path="/projetos" />
                    <Route element={<Info/>}      path="/info" />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
