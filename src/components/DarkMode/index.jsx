import { useEffect } from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";

const DarkMode = () => {
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  const setDarkMode = () => {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={localStorage.getItem("selectedTheme") === "dark"}
      />
      <label
        className="dark_mode_label"
        htmlFor="darkmode-toggle"
        aria-checked={document.body.getAttribute("data-theme") === "dark"}
      >
        <img src={Sun} className="sun" alt="Sun" />
        <img src={Moon} className="moon" alt="Moon" />
      </label>
    </div>
  );
};

export default DarkMode;
