import "./App.css";
import { useCallback, useState } from "react";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(1);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const arr = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="App">
      <List arr={arr} />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
