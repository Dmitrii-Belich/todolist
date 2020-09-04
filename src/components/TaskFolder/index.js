import React from "react";
import Task from "../Task";
import "./TaskFolder.scss";
import { Droppable } from "react-beautiful-dnd";

export default function TaskFolder({
  name,
  currentTasks,
  color,
  onTaskClick,
  onTaskChange,
  onAddTaskButton,
  id,
  onTaskDelete,
  onFolderChange,
  colors,
  onFolderColorChange,
  colorId,
}) {
  const [inputValue] = React.useState(name);
  const [selectedColor, setSelectedColor] = React.useState(colorId);
  const [isColorRedacting, setIsColorRedacting] = React.useState(false);
  return (
    <div className="taskFolder">
      <h2
        onInput={(evt) => {
          onFolderChange(id, evt.target.innerText);
        }}
        onBlur={(evt) => {
          onFolderChange(id, evt.target.innerText);
        }}
        onKeyDown={(evt) => {
          if (evt.key === "Enter") {
            evt.preventDefault();
            evt.target.blur();
          }
        }}
        className="taskFolder__title"
        style={{ color: color }}
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        {inputValue}
      </h2>
      <div className="taskFolder__line"> </div>
      <div
        className={`taskFolder__checkboxes  ${
          isColorRedacting && "taskFolder__checkboxes_type_visible"
        }`}
      >
        {colors.map((color) => {
          return (
            <i
              key={color.id}
              className={`taskFolder__radiobox ${
                color.id === selectedColor && "taskFolder__radiobox_type_active"
              }`}
              onClick={() => {
                setSelectedColor(color.id);
              }}
              style={{ backgroundColor: color.hex }}
            ></i>
          );
        })}
        <button
          className="taskFolder__checkboxes-button"
          onClick={() => {
            onFolderColorChange(id, selectedColor);
            setIsColorRedacting(false);
          }}
        >
          Применить
        </button>
      </div>
      <button
        className="taskFolder__editColor"
        onClick={() => {
          setIsColorRedacting(!isColorRedacting);
        }}
      ></button>
      <Droppable droppableId={id.toString()}>
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {currentTasks.map((task, index) => {
              return (
                <Task
                  onTaskDelete={onTaskDelete}
                  key={task.id}
                  task={task}
                  onTaskClick={onTaskClick}
                  onTaskChange={onTaskChange}
                  index={index}
                  folderId={id}
                />
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      {currentTasks.length === 0 && (
        <p className="taskFolder__empty">Задачи отсутствуют</p>
      )}
      <button
        className="taskFolder__add"
        onClick={() => {
          onAddTaskButton(id);
        }}
      ></button>
    </div>
  );
}
