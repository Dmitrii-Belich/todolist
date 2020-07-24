import React from "react";
import "./TaskBar.scss";

import TaskFolder from "../TaskFolder";

export default function Tasks({ folders, tasks, onTaskClick, onTaskChange , onAddTaskButton , onTaskDelete, onFolderChange,colors, onFolderColorChange}) {
  return (
    <div className="taskBar">
      {folders.map((item) => {
        return (
          <TaskFolder
          onFolderColorChange={onFolderColorChange}
          colors={colors}
        onFolderChange={onFolderChange}
          onTaskDelete={onTaskDelete}
          id={item.id}
          colorId={item.colorId}
          onAddTaskButton={onAddTaskButton}
          onTaskChange={onTaskChange}
          onTaskClick ={onTaskClick }
            key={item.id}
            name={item.name}
            currentTasks={tasks.filter((task) => {
              return task.listId === item.id;
            })}
            color={item.color}
          />
        );
      })}
      {
        folders.length === 0 && <p className="taskBar__empty">Задачи отсутствуют</p>
      }
    </div>
  );
}
