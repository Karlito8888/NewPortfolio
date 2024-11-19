import { useEffect, useCallback } from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";

const DarkMode = () => {
  const setDarkMode = useCallback(() => {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  }, []);

  const setLightMode = useCallback(() => {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  }, []);

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, [setDarkMode, setLightMode]);

  const toggleTheme = useCallback((e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, [setDarkMode, setLightMode]);

  const isDarkMode = localStorage.getItem("selectedTheme") === "dark";

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={isDarkMode}
        role="switch"
        aria-checked={isDarkMode}
        aria-label="Activer le mode sombre"
      />
      <label
        className="dark_mode_label"
        htmlFor="darkmode-toggle"
      >
        <img 
          src={Sun} 
          className="sun" 
          alt="" 
          aria-hidden="true"
        />
        <img 
          src={Moon} 
          className="moon" 
          alt="" 
          aria-hidden="true"
        />
      </label>
    </div>
  );
};

export default DarkMode;
