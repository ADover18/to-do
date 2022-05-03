import React from "react";

const ToDoListsHeader = (props) => {
  return (
    <header className="folders__header">
      <h6 className="folders__title">Lists</h6>
      <button className="btn btn--add" onClick={props.showNewToDoListInput}>
        +
      </button>
    </header>
  );
};

export default ToDoListsHeader;
