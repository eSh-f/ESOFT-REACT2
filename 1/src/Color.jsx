import React, { useContext } from "react";
import { ThemeContext } from "./App";

const Color = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>Сменить тему! </button>
      <h1>Тема: {theme}</h1>
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at
        beatae dicta dolore nesciunt quaerat similique tenetur voluptate
        voluptatibus. Ab corporis ipsam nemo quasi quia quidem, repudiandae
        totam vitae voluptates.
      </h5>
    </div>
  );
};

export default Color;
