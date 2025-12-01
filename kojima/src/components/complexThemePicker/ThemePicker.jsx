import { Warp } from "@paper-design/shaders-react";
import React, {useEffect, useState} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Themes.css";


const themes = [
    { name: "bw",      label: "Black‑White" },
    { name: "cyan",    label: "Cyan" },
    { name: "emerald", label: "Emerald" },
    { name: "lime",    label: "Lime" },
    { name: "default", label: "Default" },
    { name: "orange",  label: "Orange" },
    { name: "blood",   label: "Blood" },
    { name: "purple",  label: "Purple" },
    { name: "pink",    label: "Pink" },
];

export default function ThemePicker() {

    const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight});
    const [themeColors, setThemeColors] = useState({backgroundColor: "#121212", secondColor: "#505050"});
    const [theme, setTheme] = useState("default");
    const [mode, setMode] = useState("dark");

    // Handle theme button click
    const handleClick = (click) => {
        const theme = click.currentTarget.dataset.theme;
        applyTheme(theme);
        document.querySelector(".swatch.selected")?.classList.remove("selected");
        click.currentTarget.classList.add("selected");
    };

    // Handle the theme change (apply theme and update the colors)
    const applyTheme = (newTheme, newMode = mode) => {
        setTheme(newTheme);
        setMode(newMode);

        document.documentElement.setAttribute("data-theme", newTheme);
        document.documentElement.setAttribute("data-mode", newMode);
        localStorage.setItem("theme", newTheme);
        localStorage.setItem("mode", newMode);

        updateThemeColors();
    };


    // Function to retrieve the current theme's background colors based on the data-theme attribute
    const updateThemeColors = () => {
        const root = document.documentElement;
        const computedStyles = getComputedStyle(root);

        // Fetch the background and secondary colors directly from CSS variables
        const backgroundColor = computedStyles.getPropertyValue("--background-color").trim();
        const secondColor = computedStyles.getPropertyValue("--secondary-color").trim();

        setThemeColors({backgroundColor, secondColor});
    };

    useEffect(() => {
        const handleResize = () => setSize({width: window.innerWidth, height: window.innerHeight});
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    // Apply the saved theme on initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "default";
        const savedMode = localStorage.getItem("mode") || "dark";
        applyTheme(savedTheme, savedMode);
    }, []);


    return (
        <div className="theme-picker">
            <div className="background">
                <Warp
                    width={size.width}
                    height={size.height}
                    colors={[themeColors.backgroundColor, themeColors.secondColor]}
                    proportion={0.45}
                    softness={1}
                    distortion={0.25}
                    swirl={0.8}
                    swirlIterations={10}
                    shape="checks"
                    shapeScale={0.1}
                    speed={0.75}
                    scale={(size.width+size.height)/(1920+1080)*1.25}
                />
            </div>

            <div className="color-selector">
                {themes.map((theme) => (
                    <button
                        key={theme.name}
                        className="swatch"
                        data-theme={theme.name}
                        onClick={() => applyTheme(theme.name, mode)}   // mode stays same
                        title={theme.label}
                    />
                ))}

            </div>

            <div className="mode-selector">
                <button onClick={() => applyTheme(theme, mode === "light" ? "dark" : "light")}>
                    { mode === "light" ? (<i className="bi bi-lightbulb-fill"></i>) : (<i className="bi bi-lightbulb"></i>) }
                </button>
            </div>

        </div>
    );
};
