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

    // Window resizing
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
                    speed={1.69}
                    scale={(size.width+size.height)/(1920+1080)*1.25}
                />
            </div>

            <div className="mode-selector">
                <button onClick={() => {
                    const modes = ["dark", "color", "light"];
                    const nextMode = modes[(modes.indexOf(mode) + 1) % modes.length];
                    applyTheme(theme, nextMode);
                }}>
                    {mode === "dark"  && <i className="bi bi-circle ">     </i>}
                    {mode === "color" && <i className="bi bi-circle-half icon-right"> </i>}
                    {mode === "light" && <i className="bi bi-circle-fill"></i>}
                </button>
            </div>

            <div className="color-selector">
                {themes.map((t) => (
                    <button
                        key={t.name}
                        className={`swatch ${t.name === theme ? "selected" : ""}`}
                        data-theme={t.name}
                        onClick={() => applyTheme(t.name, mode)}
                        title={t.label}
                    />
                ))}
            </div>

        </div>
    );
};
