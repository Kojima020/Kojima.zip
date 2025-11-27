import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import ThemeToggle  from "./components/themeToggle/ThemeToggle";
import ThemePicker  from "./components/themePicker/ThemePicker";
import NavBar       from "./components/navBar/NavBar";
import Home         from "./pages/Home";
import Info         from "./pages/Info";
import Projetos     from "./pages/Projetos";
import "./components/themePicker/Themes.css"
import "./App.css";
import "./index.css"

export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
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
