import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {

  // Fetch Todos from JSONPLACEHOLDER
  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

        console.log(res.data);
        setTodos(res.data.slice(0,4))
      } catch (error) {
        console.error(error);
      }
    }

    fetchTodos();
  }, [])



  // Data Dummy
  const [todos, setTodos] = useState([
    // {
    //   task: "Build Mini Project",
    //   completed: true,
    // },
    // {
    //   task: "Learn React",
    //   completed: true,
    // },
    // {
    //   task: "Workout",
    //   completed: false,
    // },
    // {
    //   task: "Do assigments",
    //   completed: false,
    // },
  ]);

  // Value Input
  const [value, setValue] = useState("");

  // Add todo
  const handleSubmit = (e) => {
    e.preventDefault();
    // Jika value kosong akan muncul alert
    if (!value) {
      alert("Todo cannot be blank!");
      return;
    }

    const addedTodo = [
      ...todos,
      {
        title: value,
        completed: false,
      },
    ];

    setTodos(addedTodo);

    setValue("");
  };

  // Delete todo
  const handleDelete = (index) => {
    const newTodos = [...todos];

    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  // Complete todo
  const handleComplete = (index) => {
    // console.log("handleComplete is working!")
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;

    setTodos(newTodos);
  };

  return (
    <Router>
    <div>
      {/* Navbar */}
      <Navbar />
      <Switch>
      <div className="container">
        <Route exact path="/">

        {/* Todo Input */}
        <TodoInput handleSubmit={handleSubmit} value={value} onChange={(e) => setValue(e.target.value)} />

        {/* Todo Item */}
        <TodoItem todos={todos} handleComplete={(index) => handleComplete(index)} handleDelete={(index) => handleDelete(index)} />
        </Route >

        {/* Login Routing */}
        <Route path="/login">
          <Login />
        </Route>

        {/* Register Routing */}
        <Route path="/register">
          <Register />
        </Route>
      </div>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
