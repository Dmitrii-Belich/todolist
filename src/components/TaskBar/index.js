import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./TaskBar.scss";

import TaskFolder from "../TaskFolder";

export default function Tasks({
  folders,
  onTaskClick,
  onTaskChange,
  onAddTaskButton,
  onTaskDelete,
  onFolderChange,
  colors,
  onFolderColorChange,
  onDropInSameFolder,
  onDropInEnotherFolder
}) {
  return (
    <DragDropContext
      onDragStart={() => {
        if (window.navigator.vibrate) {
          window.navigator.vibrate(50);
        }
      }}
      onDragEnd={(result) => {
        if (
          result.destination &&
          result.source.droppableId === result.destination.droppableId
        ) {
          onDropInSameFolder(
            result.destination.index,
            +result.source.droppableId,
            +result.draggableId
          );
        }
        if (
          result.destination &&
          result.source.droppableId !== result.destination.droppableId
        ) {
          console.log(result)
          onDropInEnotherFolder(result.destination.index, +result.source.droppableId, +result.destination.droppableId, +result.draggableId, )
          /* onDropInSameFolder(
            
          ); */
        }
      }}
    >
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
              onTaskClick={onTaskClick}
              key={item.id}
              name={item.name}
              currentTasks={item.tasks}
              color={item.color}
            />
          );
        })}
        {folders.length === 0 && (
          <p className="taskBar__empty">Задачи отсутствуют</p>
        )}
      </div>
    </DragDropContext>
  );
}
