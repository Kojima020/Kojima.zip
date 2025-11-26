import React from "react";
import './Themes.css';


const themes = [
    { name: 'bw',       label: 'Black‑White' },
    { name: 'cyan',     label: 'Cyan' },
    { name: 'emerald',  label: 'Emerald' },
    { name: 'lime',     label: 'Lime' },
    { name: 'default',  label: 'Default' },
    { name: 'orange',   label: 'Orange' },
    { name: 'blood',    label: 'Blood' },
];

export default function ThemePicker() {
  const applyTheme = theme => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  React.useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);

    // highlight the correct button (if it exists)
    const btn = document.querySelector(`.swatch[data-theme="${saved}"]`);
    btn?.classList.add('selected');
  }, []);

  const handleClick = click => {
    const theme = click.currentTarget.dataset.theme;
    // remove previous highlight
    document.querySelector('.swatch.selected')?.classList.remove('selected');
      click.currentTarget.classList.add('selected');
    applyTheme(theme);
  };

  // -----------------------------------------------------------------
  // Render two buttons per palette: dark & light
  // -----------------------------------------------------------------
  return (
    <div className="theme-picker">
      {themes.map(theme => (
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
  );
}
