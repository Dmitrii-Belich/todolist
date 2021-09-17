import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Folder from "../Folder";
import "./SideBar.scss";
import Popup from "../Popup";

export default function Sidebar({
  folders,
  activeFolder,
  onFolderClick,
  onAddFolderClick,
  popupSubmitHandler,
  isPopupActive,
  colors,
  onPopupClose,
  onDeleteFolderClick,
  onDrop,
  sideBarState,
  setSideBarState,
}) {
  return (
    <DragDropContext
      onDragStart={() => {
        if (window.navigator.vibrate) {
          window.navigator.vibrate(50);
        }
      }}
      onDragEnd={(result) => {
        if (result.destination) {
          onDrop(result.destination.index, +result.draggableId);
        }
      }}
    >
      {sideBarState && (
        <div
          className="sidebar__overlay"
          onClick={() => {
            setSideBarState(!sideBarState);
          }}
        ></div>
      )}
      <div className={`sidebar ${sideBarState && "sidebar_active"}`}>
        {folders.length !== 0 && (
          <Folder
            type="all"
            text="Все задачи"
            id={0}
            activeFolder={activeFolder}
            onClick={onFolderClick}
          />
        )}
        <Droppable droppableId={"folder"}>
          {(provided) => (
            <ul
              className="sidebar__folders"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {folders.map((item, index) => {
                return (
                  <Draggable
                    draggableId={item.id.toString()}
                    index={index}
                    key={item.id}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Folder
                          type="folder"
                          text={item.name}
                          color={item.color}
                          id={item.id}
                          activeFolder={activeFolder}
                          onClick={onFolderClick}
                          onDeleteFolderClick={onDeleteFolderClick}
                        />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

        <Folder
          type="add"
          text="Добавить папку"
          onClick={onAddFolderClick}
          id={Infinity}
        />
        <Popup
          isActive={isPopupActive}
          onSubmit={popupSubmitHandler}
          colors={colors}
          onPopupClose={onPopupClose}
        />
      </div>
    </DragDropContext>
  );
}
