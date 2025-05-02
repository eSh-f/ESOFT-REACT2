import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const handleInputAction = () => {
    setText(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <input ref={inputRef} type="text" />
      <button onClick={handleInputAction}>Focus</button>
      <h4>{text}</h4>
    </div>
  );
}

export default App;
