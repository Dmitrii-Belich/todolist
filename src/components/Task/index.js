import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import "./Task.scss";

export default function Task({
  task,
  onTaskClick,
  onTaskChange,
  onTaskDelete,
  index,
  folderId
}) {
  const [inputValue] = React.useState(task.text);
  const [editable, setEditable] = React.useState(false)
  const textStyle = task.completed ? { textDecoration: "line-through" } : {};
  const text = React.useRef()
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <li className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <button
            className={`task__checkbox ${
              task.completed && "task__checkbox_type_active"
              }`}
            onClick={() => {
              onTaskClick(folderId, task.id);
            }}
          ></button>
          <p
            className="task__text"
            style={textStyle}
            onInput={(evt) => {
              onTaskChange(folderId, task.id, evt.target.innerText);
            }}
            onBlur={(evt) => {
              onTaskChange(folderId, task.id, evt.target.innerText);
              setEditable(false)
            }}
            onKeyDown={(evt) => {
              if (evt.key === "Enter") {
                evt.preventDefault();
                evt.target.blur()
              }
            }}
            contentEditable={editable}
            suppressContentEditableWarning={true}
            ref={text}
          >
            {inputValue}
          </p>
          <button className="task__edit" onClick={async ()=> {
            await setEditable(true)
            text.current.focus()
          }}></button>
      
          <button
            className="task__delete"
            onClick={() => {
              onTaskDelete(folderId, task.id);
            }}
          ></button>
          
        </li>
      )}
    </Draggable>);
}
