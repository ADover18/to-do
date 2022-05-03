import React, { useState } from "react";
import ToDoListsHeader from "./ToDoListsHeader";
import "./ToDoLists.css";
import NewToDoList from "./NewToDoList";
const ToDoLists = (props) => {
  const sortedToDoLists = Object.entries(props.items[0]).sort((a, b) => {
    return JSON.parse(b[1]).id - JSON.parse(a[1]).id;
  });

  return (
    <div className="todo-lists">
      <ToDoListsHeader showNewToDoListInput={props.addToDoList} />
      {props.isAddingToDoList && (
        <NewToDoList
          setItems={props.setItems}
          items={props.items}
          hideNewToDoListInput={props.hideNewToDoListInput}
        />
      )}
      <ul className="todo-lists__list">
        {sortedToDoLists.map((toDoList) => (
          <li
            key={JSON.parse(toDoList[1]).id}
            className="todo-lists__list-item"
            todolistdata={toDoList}
            onClick={() => {
              props.setSelectedToDoList(toDoList);
            }}
          >
            {Object.values(toDoList)[0]}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoLists;
