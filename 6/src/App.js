import "./App.css";
import { useCallback, useState } from "react";
import NoMemoChild from "./components/NoMemoChild";
import WithMemoChild from "./components/WithMemoChild";

function App() {
  const [count, setCount] = useState(0);
  const [memo, setMemo] = useState("");

  const handeleMemo = useCallback(() => {
    console.log("Handel memo");
  }, []);

  return (
    <div className="App">
      <NoMemoChild />
      <WithMemoChild handeleMemo={handeleMemo} />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}

export default App;
