import React, { useState, useEffect } from "react";
import "./Tasks.css";
const Tasks = (props) => {
  // console.log(JSON.parse(props.selectedToDoList[1]).title);
  // console.log(
  //   JSON.parse(
  //     localStorage.getItem(JSON.parse(props.selectedToDoList[1]).title)
  //   )
  // );
  const tasks = JSON.parse(props.selectedToDoList[1]).tasks;
  const [isAddingTask, setIsAddingTask] = useState(false);
  const addTaskFormHandler = (event) => {
    setIsAddingTask(true);
  };
  const removeTaskFormHandler = (event) => {
    if (isAddingTask) setIsAddingTask(false);
  };
  const submitNewTaskHandler = (event) => {
    if (event.key === "Enter") {
      let curList = JSON.parse(
        localStorage.getItem(JSON.parse(props.selectedToDoList[1]).title)
      );
      console.log(curList);
      curList.tasks.push({
        id: curList.tasks.length,
        task: document.querySelector(".new-task").children[0].value,
        completeBy: new Date(
          document.querySelector(".new-task").children[2].value
        ),
        completed: false,
      });

      localStorage.setItem(
        JSON.parse(props.selectedToDoList[1]).title,
        JSON.stringify(curList)
      );
      props.setItems([localStorage]);
      setIsAddingTask(false);
    }
  };

  return (
    <div className="list">
      <button className="list__new-item" onClick={addTaskFormHandler}>
        New Task +
      </button>
      {isAddingTask && (
        <form className="new-task" onKeyPress={submitNewTaskHandler}>
          <input type="text" name="" id="" autoFocus />
          <span>Complete By</span>
          <input type="date" name="" id="" />
        </form>
      )}
      <ul className="list__todo">
        {tasks.map((task) => {
          const date = new Date(task.completeBy);
          return (
            <li className="list__task" key={+task.id}>
              <div className="list__task-date">
                By {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
              </div>
              <div className="list__task-name">{task.task}</div>
              <input type="checkbox" className="list__task-check"></input>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Tasks;
