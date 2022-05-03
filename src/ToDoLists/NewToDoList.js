import React from "react";

const NewToDoList = (props) => {
  const submitToDoListHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const data = {
        id: window.localStorage.length + 1,
        title: event.target.value,
        tasks: [],
      };
      localStorage.setItem(event.target.value, JSON.stringify(data));
      props.setItems([localStorage]);
      props.hideNewToDoListInput();
    }
  };
  return (
    <form className="new-todo-list">
      <input
        type="text"
        name=""
        id=""
        autoFocus
        onKeyPress={submitToDoListHandler}
      />
    </form>
  );
};

export default NewToDoList;
