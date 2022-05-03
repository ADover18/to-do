import React, { useState, useEffect } from "react";

import "./App.css";

import ToDoLists from "./ToDoLists/ToDoLists";
import Tasks from "./Tasks/Tasks";

const STARTING_DATA = [
  {
    "My First List": {
      id: 1,
      title: "My First List",
      tasks: [
        {
          id: 0,
          task: "My First Task",
          completeBy: new Date(2022, 11, 17),
          completed: false,
        },
      ],
    },
  },
];

function App() {
  if (localStorage.length === 0)
    localStorage.setItem(
      Object.keys(...STARTING_DATA),
      JSON.stringify(...Object.values(...STARTING_DATA))
    );
  const [todoState, setToDoState] = useState([localStorage]);
  const todoItems = Object.entries(todoState[0]);
  const [isAddingToDoList, setIsAddingToDoList] = useState(false);
  const [selectedToDoList, setSelectedToDoList] = useState(
    todoItems[todoItems.length - 1]
  );
  const addToDoListFormHandler = (event) => {
    setIsAddingToDoList(true);
  };
  const removeToDoListFormHandler = (event) => {
    if (isAddingToDoList) setIsAddingToDoList(false);
  };
  return (
    <div id="App" className="App" onClick={removeToDoListFormHandler}>
      <header className="header">
        <h1 className="header__title">To Do</h1>
      </header>
      <section className="todo">
        <ToDoLists
          setSelectedToDoList={setSelectedToDoList}
          setItems={setToDoState}
          items={todoState}
          addToDoList={addToDoListFormHandler}
          isAddingToDoList={isAddingToDoList}
          hideNewToDoListInput={removeToDoListFormHandler}
        />
        <Tasks
          items={todoState}
          setItems={setToDoState}
          selectedToDoList={selectedToDoList}
        />
      </section>
    </div>
  );
}

export default App;
