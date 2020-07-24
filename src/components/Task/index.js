import React from "react";

import "./Task.scss";

export default function Task({
  task,
  onTaskClick,
  onTaskChange,
  onTaskDelete,

}) {
  const [inputValue] = React.useState(task.text);
  const textStyle = task.completed ? { textDecoration: "line-through" } : {};
  return (
    <div className="task">
      <button
        className={`task__checkbox ${
          task.completed && "task__checkbox_type_active"
        }`}
        onClick={() => {
          onTaskClick(task.id);
        }}
      ></button>

   
        <p
          className="task__text"
          style={textStyle}
          onInput={(evt) => {
            onTaskChange(task.id, evt.target.innerText);
          }}
          onBlur={(evt) => {
            onTaskChange(task.id, evt.target.innerText);
          }}
          onKeyDown={(evt) => {
            if (evt.key === "Enter") {
              evt.preventDefault();
              evt.target.blur()
            }
          }}
          contentEditable={!task.completed}
          suppressContentEditableWarning={true}     
        >
          {inputValue}
        </p>
      <button
        className="task__delete"
        onClick={() => {
          onTaskDelete(task.id);
        }}
      ></button>
    </div>
  );
}
