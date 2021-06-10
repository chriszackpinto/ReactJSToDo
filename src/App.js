import React, { useState, useEffect } from "react";
import "./App.css";
//Importing components
import Form from "./components/Form";
import Select from "./components/Select";
import TodoList from "./components/TodoList";
//rafce imp

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocal();
  }, [todos, filter]);

  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <div className="body">
      <div className="board">
        <div className="clip">
          <h1>My List</h1>
        </div>
        <div className="paper">
          <Select setFilter={setFilter} />
          <Form
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
