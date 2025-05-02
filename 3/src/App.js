import React, { useCallback, useMemo } from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(Math.floor(Math.random() * 100) + 1);

  const handleUpdateArr = useCallback(() => {
    setCount(Math.floor(Math.random() * 100));
  }, []);

  const arr = useMemo(() => {
    return Array.from({ length: count }, (_, i) => i + 1);
  }, [count]);

  const sum = useMemo(() => {
    return arr.reduce((acc, val) => acc + val);
  }, [arr]);

  return (
    <div className="App">
      <button onClick={handleUpdateArr}>Update</button>
      <ul>
        {arr.map((item, i) => (
          <li key={i}> {item}</li>
        ))}
      </ul>
      <p>Сумма {sum}</p>
    </div>
  );
}

export default App;
