import { Warp, Dithering } from '@paper-design/shaders-react';
import React, {useEffect, useState} from "react";
import './Themes.css';


const themes = [
    { name: 'bw',      label: 'Black‑White' },
    { name: 'cyan',    label: 'Cyan' },
    { name: 'emerald', label: 'Emerald' },
    { name: 'lime',    label: 'Lime' },
    { name: 'default', label: 'Default' },
    { name: 'orange',  label: 'Orange' },
    { name: 'blood',   label: 'Blood' },
    { name: 'purple',  label: 'Purple' },
    { name: 'pink',    label: 'Pink' },
];

export default function ThemePicker() {

    const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight});
    const [themeColors, setThemeColors] = useState({backgroundColor: '#121212', secondColor: '#505050'});

    // Handle theme button click
    const handleClick = (click) => {
        const theme = click.currentTarget.dataset.theme;
        applyTheme(theme);
        document.querySelector('.swatch.selected')?.classList.remove('selected');
        click.currentTarget.classList.add('selected');
    };

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeColors(); // Update the theme colors right after applying the new theme
    };

    // Function to retrieve the current theme's background colors based on the data-theme attribute
    const updateThemeColors = () => {
        const root = document.documentElement;
        const computedStyles = getComputedStyle(root);

        // Fetch the background and secondary colors directly from CSS variables
        const backgroundColor = computedStyles.getPropertyValue('--background-color').trim();
        const secondColor = computedStyles.getPropertyValue('--secondary-color').trim();

        setThemeColors({backgroundColor, secondColor});
    };

    useEffect(() => {
        const handleResize = () => setSize({width: window.innerWidth, height: window.innerHeight});
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle the theme change (apply theme and update the colors)


    // Apply the saved theme on initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme); // Apply the saved theme and update colors
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

            <div className="selector">
                {themes.map((theme) => (
                    <React.Fragment key={theme.name}>
                        <button
                            className="swatch"
                            data-theme={`${theme.name}-dark`}
                            onClick={handleClick}
                            title={`${theme.label} (dark)`}
                        />
                        <button
                            className="swatch"
                            data-theme={`${theme.name}-light`}
                            onClick={handleClick}
                            title={`${theme.label} (light)`}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
