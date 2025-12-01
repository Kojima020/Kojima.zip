import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

function ThemeToggle() {
    const [isDarkMode, setDarkMode] = useState(true);

    function toggleDarkMode(checked) {
        setDarkMode(checked);
        if (!checked) {
            document.body.setAttribute("data-theme", "light");
        } else {
            document.body.removeAttribute("data-theme");
        }
    }

    return (
        <div style={{ position: "fixed", top: "20px", right: "20px" }}>
            <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={30}
                moonColor="var(--h1-color)"
                sunColor="var(--h1-color)"
            />
        </div>
    );
}

export default ThemeToggle;
