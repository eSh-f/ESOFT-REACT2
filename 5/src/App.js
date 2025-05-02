import "./App.css";
import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          isDone: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo,
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

const initialState = [
  {
    id: 1,
    title: "Купить хлеб",
    isDone: false,
  },
  {
    id: 2,
    title: "Купить хлеб",
    isDone: false,
  },
];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState("");

  const handeleAddTodo = () => {
    dispatch({ type: "ADD_TODO", payload: value });
    setValue("");
  };

  function reducer(state, action) {}

  return (
    <div className="App">
      <h1>TODO</h1>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={handleAdd}>Добавить</button>

      <ul>
        {state.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.isDone ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
            >
              {todo.title}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
              style={{ marginLeft: "10px" }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
