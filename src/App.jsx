import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState();
  //When click, show todos
  // const loadTodos = async () => {
  //   const todoData = await axios.get("http://localhost:8080/todo");
  //
  //   console.log(todoData);
  //
  //   if (todoData.status == 200 && todoData.data.success == true) {
  //     setTodos(todoData.data.todos);
  //   }
  // };

  //When the page loads, show todos
  useEffect(() => {
    const loadTodos = async () => {
      const todoData = await axios.get("http://localhost:8080/todo");

      console.log(todoData);

      if (todoData.status == 200 && todoData.data.success == true) {
        setTodos(todoData.data.todos);
      }
    };

    loadTodos();
  }, []);

  return (
    <div className="App">
      {/*<button onClick={() => loadTodos()}>Click here to load todos</button>*/}
      {todos &&
        todos.length >= 1 &&
        todos.map((todo) => <div>{todo.name}</div>)}
    </div>
  );
}

export default App;
