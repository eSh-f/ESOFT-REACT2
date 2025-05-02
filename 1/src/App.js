import React, { useEffect } from "react";
import "./App.css";
import Color from "./Color";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <Color />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
